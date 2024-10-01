import { Button } from "@/components/ui/Button.tsx";
import { Input } from "@/components/ui/Input.tsx";

export function LoginForm() {
  return (
    <form method="POST" action="/api/login" class="flex flex-col gap-4">
      <Input
        type="text"
        name="username"
        placeholder="Username"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
      />
      <Button type="submit">
        Login
      </Button>
    </form>
  );
}
