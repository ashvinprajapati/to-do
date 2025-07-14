import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ refreshTasks }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/tasks", { text });
    setText("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
};

export default TaskForm;
