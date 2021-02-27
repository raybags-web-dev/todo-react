import React from "react";
import "../css/styles.css";

export default function Todo({ todo, toggleTodod }) {
  function handleTodoClick() {
    toggleTodod(todo.id);
  }
  return (
    <div className="tickbox">
      <label className="labelText">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <div className="todo-name">{todo.name}</div>
      </label>
    </div>
  );
}
