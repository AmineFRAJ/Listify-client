import React from "react";
import "./todoCard.css";
import Delete from "../delete/Delete";
import Update from "../delete copy/Update";
import Done from "../Done/Done";
const TodoCard = ({task}) => {
  return (
    <div
      className={`todo-card container d-flex flex-column mt-4 ${
        task.isDone ? "todo-done" : "todo-undone"
      }`}
    >
      <div className="todo-card-header">
        <h3> {task.title} </h3>
      </div>
      <div className="todo-card-body">
        <p> {task.body} </p>
      </div>
      <div className="todo-card-footer ">
       <Done task={task}/>
        <Update task={task}/>
        <Delete task={task} />
      </div>
    </div>
  );
};

export default TodoCard;
