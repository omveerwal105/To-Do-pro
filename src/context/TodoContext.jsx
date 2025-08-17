import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();

const init = () => {
  const stored = localStorage.getItem("task");
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  tasks: init(),
  filter: "All",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newTask = {
        text: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
    case "DELETE": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    case "TOGGLE": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    }
    case "EDIT": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    }

    case "FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(state.tasks));
  }, [state.tasks]);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
