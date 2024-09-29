import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { LoginForm } from "@/components/LoginForm.tsx";

interface Data {
  isLoggedIn: boolean;
}

export const handler: Handlers = {
  GET: (request: Request, context: FreshContext) => {
    const cookies = getCookies(request.headers);
    return context.render({ isLoggedIn: cookies.auth === "bar" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class="container mx-auto p-4 flex flex-col gap-5">
      <h1 class="text-3xl font-bold text-center">Welcome to Deno</h1>

      <p class="text-center">
        {data.isLoggedIn ? "You are logged in" : "You are not logged in"}
      </p>

      <div class="mx-auto">
        <a href="/dashboard" class="underline underline-offset-2 text-blue-500">
          Dashboard
        </a>
      </div>

      <div class="mx-auto">
        {data.isLoggedIn ? <a href="/logout">Logout</a> : <LoginForm />}
      </div>
    </div>
  );
}
