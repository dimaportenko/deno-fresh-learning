import { Handlers } from "$fresh/server.ts";
import { Expense } from "@/routes/api/expenses/index.ts";

export const handler: Handlers = {
  async GET(_req: Request) {
    const kv = await Deno.openKv();
    const entries = kv.list<Expense>({ prefix: ["expenses"] });

    let totalAmount = 0;
    for await (const entry of entries) {
      totalAmount += entry.value.amount;
    }

    return Response.json(totalAmount);
  },
};
