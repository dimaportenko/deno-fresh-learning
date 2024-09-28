import { FreshContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";

const expenseSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  amount: z.number().int().positive(),
  date: z.string(),
});

type Expense = z.infer<typeof expenseSchema>;

const createPostSchema = z.object({
  name: z.string().min(3).max(20),
  amount: z.number().int().positive(),
  date: z.string(),
});

export const handler: Handlers = {
  async GET(_req: Request, _ctx: FreshContext) {
    const kv = await Deno.openKv();
    const entries = kv.list<Expense>({ prefix: ["expenses"] });
    const expenses: Expense[] = [];
    for await (const entry of entries) {
      // console.log(entry.key); // ["preferences", "ada"]
      // console.log(entry.value); // { ... }
      // console.log(entry.versionstamp); // "00000000000000010000"
      expenses.push(entry.value);
    }

    return new Response(JSON.stringify(expenses));
  },
  async POST(req: Request) {
    const data = await req.json();
    const expenseData = createPostSchema.parse(data);
    // generate a random id
    const expense: Expense = {
      id: Math.floor(Math.random() * 1000),
      ...expenseData,
    };

    const kv = await Deno.openKv();
    const expenseKey = ["expenses", expense.id];
    const ok = await kv.atomic().set(expenseKey, expense).commit();

    if (!ok) {
      throw new Error("Failed to save expense");
    }

    return new Response(JSON.stringify(expense));
  },
};
