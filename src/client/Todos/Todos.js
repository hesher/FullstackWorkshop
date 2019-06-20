import React, { useState } from "react";
import AddTodos from "./AddTodos";
import Todo from "../Todo/Todo";
import "./Todos.css";
// import useTodos from './useTodos'

export default function Todos() {
  // Replace useState with useTodos
  // remove parameter (useTodos doesn't take a parameter)
  const [todos, setTodos] = useState([
    { label: "Go to Todos.js" },
    { label: "Replace useState with useTodos" },
    { label: "remove anything passed into useTotos" },
    { label: "Uncomment the 'import' statement" },
    { label: "Refresh the browser" }
  ]);

  if (todos !== null) {
    return (
      <div className="Todos_container">
        {todos.map((todo, index) => (
          <Todo
            key={todo.label}
            todo={todo}
            onDelete={() => {
              setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
            }}
            onComplete={() => {
              setTodos([
                ...todos.slice(0, index),
                { ...todo, complete: !todo.complete },
                ...todos.slice(index + 1)
              ]);
            }}
          />
        ))}
      </div>
    );
  }

  return <span>Waiting...</span>;
}
