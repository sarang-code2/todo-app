import React from "react";
import { Todo } from "../types";

export default function TodoItem({
  todo,
  onToggle,
  onDelete
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        padding: "8px 0",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>Delete Task</button>
    </div>
  );
}
