import { ADD_TASK_FAIL, ADD_TASK_LOAD, ADD_TASK_SUCCESS } from "../ActionsTypes/TaskActionsType";
import axios from "axios";
// add task
export const addTask = (newTask) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOAD });
  try {
    const result = await axios.post("/api/lists/addTask", newTask);

    dispatch({ type: ADD_TASK_SUCCESS, payload: result.data });
    
    
  } catch (error) {
    dispatch({ type: ADD_TASK_FAIL, payload: error.response.data.errors });
  }
};
