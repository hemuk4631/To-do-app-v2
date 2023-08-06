import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState({});
  const [todo, setTodo] = React.useState("");

  let todoLength = todos.length;

  const handleAddTodo = () => {
    // Fin an ability to add new task
    setTodo("");
    setTodos((prev) => [...prev, task]);
  };

  const addTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleKeyUp = (e) => {
    setTask(() => ({
      id: todoLength + 1,
      label: todo,
      checked: false,
    }));
  };
  // console.log(todos);
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        name="label"
        value={todo}
        onChange={addTodo}
        onKeyUp={handleKeyUp}
      />
      <button
        type="button"
        disabled={todo.length === 0}
        onClick={handleAddTodo}
      >
        Add task
      </button>
    </div>
  );
};
