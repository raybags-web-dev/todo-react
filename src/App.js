import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./css/styles.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // todo storage key
  const LOCAL_STORAGE_KEY = "todo_app.todos";

  // load todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  // save todos
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // taggle todo complete checkbox
  function toggleTodod(id) {
    const newTodods = [...todos];
    const todo = newTodods.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodods);
  }
  // handle add todo
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  // handle Clear todos
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <div className="todoMainContainer">
      <h2>todo list</h2>

      <div className="inner-box">
        <div className="handler-section">
          <button onClick={handleAddTodo}>Add Tasks</button>
          <input className="inputfield" ref={todoNameRef} type="text" />
          <button onClick={handleClearTodos}>Task Done</button>
        </div>

        <div className="todo-section">
          <div className="Items-remain-header">{todos.filter((todo) => !todo.complete).length} Tasks Left</div>
          <TodoList todos={todos} toggleTodod={toggleTodod} />
        </div>
      </div>
    </div>
  );
}

export default App;
