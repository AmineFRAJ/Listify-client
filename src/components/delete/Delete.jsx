import React from "react";
import "./delete.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { deleteTaskById } from "../../JS/Actions/TaskActions";
import { useDispatch } from "react-redux";

const Delete = ({ task }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const id = task._id;
    dispatch(deleteTaskById(id));
    handleClose();
  };
  return (
    <div className="btn-delete" title="Delete">
      <AiOutlineDelete onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task ?!</Modal.Body>
        <Modal.Footer className="modal-footer">
          <button className="btn-cls" onClick={handleClose}>
            Close
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Delete;
