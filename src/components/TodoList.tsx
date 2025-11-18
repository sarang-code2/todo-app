import React from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggle,
  onDelete
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}
