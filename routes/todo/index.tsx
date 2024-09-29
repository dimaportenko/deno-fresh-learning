import Todos from "@/islands/Todos.tsx";

export default function TodoPage() {
  return (
    <div class="container mx-auto p-4 flex flex-col gap-5">
      <div>
        <img src="/logo.svg" alt="Fresh logo" class="w-32 h-32 mx-auto" />
        <h1 class="text-3xl font-bold text-center">Fresh Todo App</h1>
      </div>

      <div class="mx-auto flex flex-col">
        <Todos />
      </div>
    </div>
  );
}
