/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Todo.css";
import PropTypes from "prop-types";
import TodoButton from "./TodoButton";

export default function Todo({
  todo: { label, complete = false },
  onComplete,
  onDelete
}) {
  return (
    <span
      className={`Todos_Todo_container ${
        complete ? "Todos_Todo_completed" : "Todos_Todo_not_completed"
      }`}
    >
      <TodoButton onClick={onComplete} buttonLabel={label}>
        V
      </TodoButton>

      <TodoButton onClick={onDelete}>X</TodoButton>
    </span>
  );
}

Todo.propTypes = {
  todo: PropTypes.exact({
    label: PropTypes.string.isRequired,
    complete: PropTypes.bool
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
