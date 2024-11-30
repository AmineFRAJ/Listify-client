import React, { useState } from "react";
import "./todo.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/TaskActions";
 
const Todo = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({});
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

//function to make the descrption visible 
  const [isVisible, setIsVisible] = useState(false);
 const show = () => {
    setIsVisible(true);
  };
  const handleAdd = () => {
    dispatch(addTask(newTask ));
  };
  console.log(newTask);
  return (
    <div className="todo">
      <div className="todo-main container d-flex flex-column justify-content-center align-items-center ">
        <div className="d-flex flex-column todo-inputs ">
          <input
            type="text"
            placeholder="Task Name"
            className="my-2"
            required
            onClick={show}
            name='title'
            onChange={(e) => handleChange(e)}
            
          /> 
          {isVisible && (
            
            <textarea
              type="text"
              placeholder="Description..."
             name="body"
             onChange={(e) => handleChange(e)}
             
            />
          )}
          <button className="btn  my-3 mb-0" onClick={handleAdd()}>
            <IoAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
