import { FiX } from "react-icons/fi";

export default function TodoList({ todos, handleDelete, handleComplete }: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {todos.map((todo: any) => (
        <div
          key={todo.id}
          className="flex items-center justify-between sm:w-1/2 w-3/4"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.completed}
              onChange={() => {
                handleComplete(todo.id);
              }}
            />
            <p className={todo.completed ? "text-xl line-through" : "text-xl"}>
              {todo.task}
            </p>
          </div>
          <button onClick={() => handleDelete(todo.id)} className="text-2xl">
            <FiX />
          </button>
        </div>
      ))}
    </div>
  );
}
