import { Handlers, STATUS_CODE } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    try {
      const data = await req.json()
      console.log(data)
      return new Response(null, {
        status: STATUS_CODE.Created,
      })
    } catch (error) {
      return new Response(error)
    }
  }
}
