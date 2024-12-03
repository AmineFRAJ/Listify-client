import {
  ADD_TASK_FAIL,
  ADD_TASK_LOAD,
  ADD_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_LOAD,
  DELETE_TASK_SUCCESS,
  DONE_TASKS_FAIL,
  DONE_TASKS_LOAD,
  DONE_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_LOAD,
  GET_TASKS_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_LOAD,
  UPDATE_TASK_SUCCESS,
} from "../ActionsTypes/TaskActionsType";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Get tasks action
export const getTasks = () => async (dispatch) => {
  dispatch({ type: GET_TASKS_LOAD });

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    console.log(decodedToken);

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/lists/getTask/${userId}`);
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: response.data.list || [],
    });
    console.log(response);
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAILURE,
      payload: error.response ? error.response.data.message : "Server error",
    });
  }
};

// Action to add a task
export const addTask = (taskData) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOAD });

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Decode the token to extract the id
    const decodedToken = jwtDecode(token);
    const id = decodedToken.id; // Assuming the token contains 'id'
    console.log(decodedToken);
    // Include the id in the task data
    const updatedTaskData = {
      ...taskData,
      id, // Add the decoded id
    };
    console.log(updatedTaskData);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/lists/addTask`, updatedTaskData);

    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: response.data, // This will be the task added to the backend
    });
    dispatch(getTasks());
  } catch (error) {
    dispatch({
      type: ADD_TASK_FAIL,
      payload: error.response
        ? error.response.data
        : { msg: error.message || "Server Error" },
    });
  }
};

//delete task
export const deleteTaskById = (TaskId) => async (dispatch) => {
  dispatch({ type: DELETE_TASK_LOAD });
  try {
    const result = await axios.delete(`${process.env.REACT_APP_API_URL}/api/lists/deleteTask/${TaskId}`);
    dispatch({ type: DELETE_TASK_SUCCESS, payload: result.data });
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: DELETE_TASK_FAIL, payload: error });
  }
};

//update task
export const editTask =
  ({ TaskId, newTask }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_TASK_LOAD });
    try {
      // Ajouter isDone: false par défaut si ce n'est pas dans newTask
      const updatedTask = { ...newTask, isDone: newTask.isDone ?? false };
      const result = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/lists/updateTask/${TaskId}`,
        updatedTask
      );
      dispatch({ type: UPDATE_TASK_SUCCESS, payload: result.data });
      dispatch(getTasks());
    } catch (error) {
      dispatch({ type: UPDATE_TASK_FAIL, payload: error });
    }
  };

// done task action
export const doneTask = (TaskId, currentStatus) => async (dispatch) => {
  dispatch({ type: DONE_TASKS_LOAD });
  try {
    // Only update the isDone field to true
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/api/lists/updateTask/${TaskId}`, {
      isDone: !currentStatus,
    });

    dispatch({ type: DONE_TASKS_SUCCESS, payload: result.data });
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: DONE_TASKS_FAIL, payload: error });
  }
};
