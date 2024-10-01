import { Button } from "@/components/ui/Button.tsx";
import { Input } from "@/components/ui/Input.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card.tsx";

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Login Form</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
