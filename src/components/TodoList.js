import React from "react";
import Todo from "./Todo";
import "../css/styles.css";

export default function TodoList({ todos, toggleTodod }) {
  return todos.map((todo) => {
    return (
      <div className="todo-item" key={todo.id}>
        <Todo todo={todo} toggleTodod={toggleTodod} />
      </div>
    );
  });
}
