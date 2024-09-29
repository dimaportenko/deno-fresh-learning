export function LoginForm() {
  return (
    <form method="POST" action="/api/login" class="flex flex-col gap-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        class="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        class="border p-2"
      />
      <button type="submit" class="border p-2">
        Login
      </button>
    </form>
  );
}
