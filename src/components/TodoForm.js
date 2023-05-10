import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form className="TodoForm">
        <input
          type="text"
          className="todo-input"
          placeholder="what is the task  today?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn" onClick={handleSubmit}>
          add Task
        </button>
      </form>
    </div>
  );
}
