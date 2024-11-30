import { ADD_TASK_FAIL, ADD_TASK_LOAD, ADD_TASK_SUCCESS } from "../ActionsTypes/TaskActionsType";

const initialState = {
    load: false,
    success: null,
    error: null,
    Task: {},
    
  };
  
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK_LOAD:
      return { ...state, load: true };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        load: false,
        success: payload.success,
        error: null,
        Task: payload,
      };

    case ADD_TASK_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};

export default taskReducer;
