import React, { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../JS/Actions/TaskActions";
 

 

const TodoList = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.taskReducer.tasks);
  console.log(tasks)
  return (
    <div className="todo-list ">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoCard key={task._id} task={task} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TodoList;
