import React from "react";
import "./TodoButton.css";
import PropTypes from "prop-types";

const TodoButton = ({ children, onClick, disabled, buttonLabel }) => (
  <>
    <button
      className="Todos_Action_button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...(buttonLabel ? { id: `button_id_${buttonLabel}` } : {})}
    >
      {children}
    </button>
    {buttonLabel ? (
      <label htmlFor={`button_id_${buttonLabel}`} className="Todos_Todo_label">
        {buttonLabel}
      </label>
    ) : null}
  </>
);

export default TodoButton;

TodoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string
};

TodoButton.defaultProps = {
  disabled: false,
  buttonLabel: null
};
