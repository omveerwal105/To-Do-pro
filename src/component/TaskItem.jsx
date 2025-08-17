import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskItem = ({ onEdit }) => {
  const { state, dispatch } = useContext(TodoContext);

  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "Completed") return task.completed;
    if (state.filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <div className="card mx-auto mt-3 shadow-sm w-50">
          <div
            className="card-header d-flex justify-content-between align-items-center"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleToggle(task.id)}
          >
            <h5 className="mb-0">{task.text}</h5>
            <span
              className={`badge ${
                task.completed ? "bg-success" : "bg-secondary"
              }`}
            >
              {task.completed ? "Done" : "Pending"}
            </span>
          </div>
          <div className="card-body d-flex justify-content-end gap-2">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => onEdit(task)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
