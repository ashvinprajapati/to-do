import React from "react";
import axios from "axios";

const TaskList = ({ tasks, refreshTasks }) => {
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/api/tasks/${id}`);
    refreshTasks();
  };

  const toggleComplete = async (id) => {
    await axios.patch(`http://localhost:3000/api/tasks/toggle/${id}`);
    refreshTasks();
  };

  const editTask = async (id) => {
    const newText = prompt("Enter new task text:");
    if (newText) {
      await axios.put(`http://localhost:3000/api/tasks/edit/${id}`, {
        text: newText,
      });
      refreshTasks();
    }
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center bg-gray-100 p-2 rounded"
        >

          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>

          <div className="space-x-2">
            <button
              onClick={() => toggleComplete(task._id)}
              className="bg-green-500 text-white px-2 rounded"
            >
              ✅
            </button>

            <button
              onClick={() => editTask(task._id)}
              className="bg-yellow-500 text-white px-2 rounded"
            >
              ✏️
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
