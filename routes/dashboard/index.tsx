import { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: FreshContext) {
    const cookies = getCookies(req.headers);

    if (cookies.auth === "bar") {
      return ctx.render();
    }

    const url = new URL(req.url);
    url.pathname = "/login";
    return Response.redirect(url);
  },
};

export default function DashboardPage() {
  return (
    <div class="p-4">
      <div class="flex gap-4">
        <a href="/" class="underline underline-offset-2 text-blue-500">
          Home
        </a>

        <a href="/logout" class="underline underline-offset-2 text-blue-500">
          Logout
        </a>
      </div>

      <div class="py-4">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
