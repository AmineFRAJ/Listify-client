 import React, { useState } from "react";
import "./todo.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../JS/Actions/TaskActions";
import TodoList from "../../components/todoCard/TodoList";
import { Link } from "react-router-dom"; // Import Link

const Todo = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const [newTask, setNewTask] = useState({ title: "", body: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const show = () => {
    setIsVisible(true);
  };

  const handleAdd = () => {
    if (!isAuth) {
      setAlertMessage(
        "Please sign up or log in to create a Todo list!"
      );
      return;
    }

    if (!newTask.title || !newTask.body) {
      setAlertMessage("Please provide both a title and description.");
      return;
    }

    dispatch(addTask(newTask));
    setNewTask({ title: "", body: "" });
    setIsVisible(false);
    setAlertMessage("");
  };

  return (
    <div className="todo">
      <div className="todo-main container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column todo-inputs">
          <input
            type="text"
            placeholder="Task Name"
            className="my-2"
            required
            onClick={show}
            name="title"
            value={newTask.title || ""}
            onChange={handleChange}
          />
          {isVisible && (
            <textarea
              type="text"
              placeholder=" Description..."
              name="body"
              value={newTask.body || ""}
              onChange={handleChange}
            />
          )}
          <button className="btn my-3 mb-0" onClick={handleAdd}>
            <IoAddCircleOutline />
          </button>
        </div>
        {alertMessage && (
          <div className="alert alert-danger mt-3">
            {alertMessage}{" "}
            {!isAuth && (
              <span>
                <Link to="/register" className="alert-link">
                  Sign Up
                </Link>{" "}
                or{" "}
                <Link to="/login" className="alert-link">
                  Log In
                </Link>
              </span>
            )}
          </div>
        )}
        {isAuth && (
          <div className="filter-task-container mt-4"></div>
        )}
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
