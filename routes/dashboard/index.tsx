import { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: FreshContext) {
    const cookies = getCookies(req.headers);

    if (cookies.auth === "bar") {
      return ctx.render()
    }

    const url = new URL(req.url);
    url.pathname = "/";
    return Response.redirect(url);
  }
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
