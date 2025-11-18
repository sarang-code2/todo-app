import React, { useState } from "react";

export default function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };
  const clear = () => {
    setText("");
  };

  return (
    <div style={{ display: "flex", marginBottom: 16 }}>
      <input
        style={{ flex: 1, padding: 8 }}
        value={text}
        placeholder="Add a new todo"
        onChange={(e) => setText(e.target.value)}
        id="todo-input"
      />
      <button style={{ marginLeft: 8 }} onClick={submit}   id="add-todo-button">
        Add
      </button>
    

    </div>
  );
}
