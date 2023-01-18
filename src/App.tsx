import TodoForm from "./components/TodoForm";
import { useLocalStorage } from "usehooks-ts";
import TodoList from "./components/TodoList";
import { FiSun, FiMoon } from "react-icons/fi";

function App() {
  const [todos, setTodos] = useLocalStorage<any>("todos", []);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  // Add delete functionality
  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodos);
  };

  // Add complete functionality
  const handleComplete = (id: string) => {
    const newTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className="flex flex-col max-w-screen min-h-screen font-mont"
    >
      <header className="w-full flex justify-between container mx-auto px-2 sm:px-12 py-8 font-bold">
        <p className="text-3xl">To-Do</p>
        <button onClick={() => setDarkMode(!darkMode)} className="text-3xl">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <div className="container mx-auto">
        <TodoForm setTodos={setTodos} todos={todos} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default App;
