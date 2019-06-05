import React, { useState } from "react";
import AddTodos from "./AddTodos";
import Todo from "../Todo/Todo";
import "./Todos.css";

export default function Todos() {
  // Replace useState with useTodos
  // remove parameter (useTodos doesn't take a parameter)
  // import useTodos from './useTodos'
  const [todos, setTodos] = useState([
    { label: "Go to Todos.js" },
    { label: "Remove the useState code" },
    { label: "Replace it with useTodos" },
    { label: "Import useTodos from './useTodos'" },
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
