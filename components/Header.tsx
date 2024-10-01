import { Link } from "@/components/Link.tsx";

export function Header() {
  return (
    <div class="h-14 border-b flex item-center px-4 gap-4">
      <a href="/" class="flex items-center">
        <img src="/logo.svg" alt="Fresh logo" class="w-12 h-12 " />
      </a>

      <div class="flex gap-4 items-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/expenses">Expenses</Link>
      </div>
    </div>
  );
}
