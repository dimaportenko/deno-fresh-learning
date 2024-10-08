import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(req: Request) {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);

    deleteCookie(headers, "auth", { path: "/", domain: url.hostname });

    headers.set("Location", "/");

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
