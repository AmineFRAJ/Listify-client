import React, { useState } from "react";
import "./update.css";
import { CiEdit } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editTask } from "../../JS/Actions/TaskActions";
import { useDispatch } from "react-redux";

const Update = ({ task }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTask, setNewTask] = useState({
    title: task?.title || "", // Initialize with task values or empty
    body: task?.body || "",
    isDone: task?.isDone ?? false,
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (newTask.title.trim() && newTask.body.trim()) {
      const updatedTask = { ...newTask, isDone: false }; // Add isDone
      dispatch(editTask({ TaskId: task._id, newTask: updatedTask }));
      handleClose();
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <div className="btn-update" title="Update">
      <CiEdit onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                name="body"
                as="textarea"
                rows={3}
                value={newTask.body}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <button className="btn-cls" type="button" onClick={handleClose}>
                Close
              </button>
              <button className="btn-save" type="submit">
                Save Changes
              </button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Update;
