import { useEffect, useState } from "preact/hooks";
import { Todo } from "@/routes/api/todos/index.ts";
import { Button } from "@/components/ui/Button.tsx";
import { Input } from "@/components/ui/Input.tsx";

function Todos() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

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

  const getTodos = async () => {
    try {
      const response = await fetch("/api/todos");
      const todosData = await response.json();

      setTodos(todosData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div class="flex flex-col gap-2">
      <div class="flex gap-3">
        <Input
          name="todo"
          placeholder="Add a todo"
          type="text"
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            setTodo(target.value);
          }}
        />
        <Button
          onClick={onSubmit}
        >
          Add
        </Button>
      </div>

      <div>
        {/* {JSON.stringify(todos)} */}
      </div>

      <div class="flex flex-col gap-2 pt-10">
        {todos.map((item) => (
          <div key={item.id}>{item.todo}</div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
