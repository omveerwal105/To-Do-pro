import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TaskItem from "./TaskItem";

const AddTask = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [taskName, setTaskName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!taskName.trim()) {
      alert("Enter the task");
      return;
    }
    if (editId !== null) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, text: taskName },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: taskName,
      });
    }
    setTaskName("");
  };
  const handleEdit = (task) => {
    setEditId(task.id);
    setTaskName(task.text);
  };

  return (
    <div className="container p-4">
      <h4 className="text-center ">Todo Tasks</h4>
      <div className="d-flex justify-content-center mt-3">
        <input
          className="form-control w-50"
          placeholder="Enter the task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className={`ms-2 btn ${editId ? "btn-success" : "btn-primary"}`}
          onClick={handleAdd}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          className={`btn btn-sm ${
            state.filter === "All" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => dispatch({ type: "FILTER", payload: "All" })}
        >
          All
        </button>
        <button
          className={`btn btn-sm ${
            state.filter === "Completed" ? "btn-success" : "btn-outline-success"
          }`}
          onClick={() => dispatch({ type: "FILTER", payload: "Completed" })}
        >
          Completed
        </button>
        <button
          className={`btn btn-sm ${
            state.filter === "Pending" ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => dispatch({ type: "FILTER", payload: "Pending" })}
        >
          Pending
        </button>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          Clear Completed
        </button>
      </div>

      <TaskItem onEdit={handleEdit} />
    </div>
  );
};

export default AddTask;
