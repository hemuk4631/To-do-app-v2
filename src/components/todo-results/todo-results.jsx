import * as React from "react";
import "./todo-results.scss";
import { useContext } from "react";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos } = useContext(TodosContext);

  const calculateChecked = (todos) => {
    // Fix an ability to calculate completed tasks
    return (
      <div className="container">
        {todos.length !== 0 ? <h2>Completed Task:</h2> : ""}
        {todos
          .filter((ele) => ele.checked === true)
          .map((ele) => (
            <div key={ele.id}>
              <span className="task-id">{ele.id}:</span>
              <span key={ele.id}>{ele.label}</span>
              <br />
            </div>
          ))}
      </div>
    );
  };

  return <div className="todo-results">{calculateChecked(todos)}</div>;
};
