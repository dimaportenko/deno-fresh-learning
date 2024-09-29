import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const url = new URL(req.url);
    const formData = await req.formData();

    if (
      formData.get("username") === "deno" ||
      formData.get("password") === "land"
    ) {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar",
        maxAge: 120,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("Location", "/");

      return new Response(null, { status: 303, headers });
    } else {
      return new Response("Invalid credentials", { status: 401 });
    }
  },
};
