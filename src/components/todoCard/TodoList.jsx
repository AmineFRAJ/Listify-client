import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../JS/Actions/TaskActions";
import FilterTask from "../filter/FilterTask";

const TodoList = () => {
  const [filter, setFilter] = useState("All"); // State for filtering
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.taskReducer.tasks);

  // Filter tasks based on filter state
  const filteredTasks =
    filter === "Done"
      ? tasks.filter((task) => task.isDone)
      : filter === "UnDone"
      ? tasks.filter((task) => !task.isDone)
      : tasks

  return (
    <div className="todo-container">
      {/* Conditionally render FilterTask only when tasks are available */}
      {tasks && tasks.length > 0 && (
        <div className="filter-container">
          <FilterTask setFilter={setFilter} />
        </div>
      )}
      <div className="todo-list">
        {tasks && tasks.length > 0 ? (
          filteredTasks.map((task) => <TodoCard key={task._id} task={task} />)
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
