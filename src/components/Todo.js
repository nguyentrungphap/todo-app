import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Todo({ task, toggleCompleted }) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleCompleted(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div className="icon">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
