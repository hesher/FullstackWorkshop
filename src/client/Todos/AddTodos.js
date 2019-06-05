import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Todos.css";

const AddTodo = ({ onAdd }) => {
  const [newLabel, setNewLabel] = useState("");
  return (
    <>
      <input
        onChange={e => setNewLabel(e.target.value)}
        value={newLabel}
        placeholder="New Todo"
        className="Todos_add_input"
        onKeyDown={e => {
          if (e.keyCode === 13 && newLabel != "") {
            onAdd(newLabel);
            setNewLabel("");
          }
        }}
      />
      <button
        type="button"
        disabled={newLabel === ""}
        className="Todos_add_button"
        onClick={() => onAdd(newLabel)}
      >
        Add
      </button>
    </>
  );
};

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddTodo;
