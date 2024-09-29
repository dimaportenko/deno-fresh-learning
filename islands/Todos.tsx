import { useState } from "preact/hooks";

function Todos() {
  const [todo, setTodo] = useState<string>("");

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo }),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="flex flex-col gap-2">
      <div class="flex gap-3">
        <input
          name="todo"
          placeholder="Add a todo"
          type="text"
          class="rounded-lg border w-full px-2.5 py-1.5"
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            setTodo(target.value);
          }}
        />
        <button
          class="bg-lime-500 px-3 text-white rounded-lg"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todos;
