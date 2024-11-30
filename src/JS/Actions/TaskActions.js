import { ADD_TASK_FAIL, ADD_TASK_LOAD, ADD_TASK_SUCCESS } from "../ActionsTypes/TaskActionsType";
import axios from 'axios';


// Action to add a task
export const addTask = (taskData) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOAD });
  
  try {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
      },
    };

    const response = await axios.post(
      '/api/lists/addTask', // Backend endpoint to add task
      taskData, // Send title and body
      config // Send the token in the headers
    );

    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: response.data, // This will be the task added to the backend
    });
  } catch (error) {
    dispatch({
      type: ADD_TASK_FAIL,
      payload: error.response ? error.response.data : { msg: 'Server Error' },
    });
  }
};
