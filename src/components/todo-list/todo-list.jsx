import * as React from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = ({ todosTemplate }) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  // console.log(todos);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    const newTodos = [...todos];
    newTodos.splice(
      newTodos.findIndex((e) => e.id === id),
      1
    );
    setTodos(newTodos);
  };

  const toggleCheck = (e, item) => {
    // Fix an ability to toggle task
    const check = e.target.checked;
    const toggleItem = { ...item };
    toggleItem.checked = check;
    // console.log(toggleItem);

    const newTodos = [...todos];
    let newInd = newTodos.findIndex((e) => e.id === item.id);
    // console.log(newInd);
    newTodos[newInd] = toggleItem;
    setTodos(newTodos);
  };

  // console.log(todos);
  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todosTemplate.length ? (
        <div className="todo-list-content">
          {todosTemplate.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={(e) => toggleCheck(e, todoItem)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
              CheckboxDisplay=""
              buttonCss="checkbox-delete"
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
