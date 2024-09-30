import { Handlers, STATUS_CODE } from "$fresh/server.ts";
import { dbClient } from "@/utils/dbConnection.ts";
import { z } from "zod";

const todoPostSchema = z.object({
  todo: z.string().min(3),
});

const todoSchema = z.object({
  id: z.number(),
  todo: z.string().min(3),
});

export type Todo = z.infer<typeof todoSchema>;

export const handler: Handlers = {
  async POST(req: Request) {
    await dbClient.connect();
    try {
      const data = await req.json();
      console.log(data);
      const todoPostData = todoPostSchema.parse(data);

      const result = await dbClient.queryArray<Todo[]>(
        "INSERT INTO todos (todo) VALUES ($1)",
        [todoPostData.todo],
      );
      // queryObject

      const value = result.rows[0];
      console.log(value, result);
      await dbClient.end();
      return new Response(JSON.stringify(value), {
        status: STATUS_CODE.Created,
      });
    } catch (error) {
      await dbClient.end();
      return new Response(error);
    }
  },
  async GET() {
    await dbClient.connect();
    try {
      const result = await dbClient.queryArray<Todo[]>(
        "SELECT * FROM todos",
      );

      await dbClient.end();
      const responseData = result.rows.map((row) => ({
        id: row[0],
        todo: row[1],
      }));

      return new Response(JSON.stringify(responseData), {
        status: STATUS_CODE.OK,
      });
    } catch (error) {
      await dbClient.end();
      return new Response(error);
    }
  },
};
