import { FormEvent, useState } from "react";

interface data {
  setTodos: (todos: any) => void;
  todos: string[];
}

export default function TodoForm({ setTodos, todos }: data) {
  const [todo, setTodo] = useState("");

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    const newTodos = [
      ...todos,
      {
        id: Date.now(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(newTodos);
    setTodo("");
  };

  return (
    <form
      onSubmit={(e) => handleAdd(e)}
      className="flex items-center justify-center gap-4 py-8 px-2 sm:px-0"
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input input-primary w-3/4 sm:1/2"
        type="text"
        placeholder="Add a todo"
      />
      <button type="submit" className="btn ">
        Add
      </button>
    </form>
  );
}
