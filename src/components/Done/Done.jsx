import React from "react";
import "./done.css";
import { MdNotInterested } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { doneTask } from "../../JS/Actions/TaskActions";

const Done = ({task}) => {
  const dispatch = useDispatch();
  const id = task._id;
  const statut = task.isDone;
  const handleDone = () => {
    dispatch(doneTask(id,statut));
  };
  return (
    <div className="btn-done" onClick={handleDone} title={statut ? "Mark as Undone" : "Mark as Done"}>
    {statut ? (
      <MdNotInterested className="icon-undone" /> // Show "Undone" icon if done
    ) : (
      <FaRegCheckCircle className="icon-done" /> // Show "Done" icon if not done
    )}
  </div>
  );
};

export default Done;
