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

const initialState = {
  load: false,
  success: null,
  error: null,
  Task: {},
  tasks: [],
  deletedTask: {},
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS_LOAD:
      return { ...state, loading: true, error: null };

    case GET_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: payload };

    case GET_TASKS_FAILURE:
      return { ...state, loading: false, error: payload };

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

    case DELETE_TASK_LOAD:
      return { ...state, load: true };

    case DELETE_TASK_SUCCESS:
      return { ...state, load: false, success: true, deletedTask: payload };

    case DELETE_TASK_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case UPDATE_TASK_LOAD:
      return { ...state, load: true };

    case UPDATE_TASK_SUCCESS:
      return { ...state, load: false, success: true };

    case UPDATE_TASK_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case DONE_TASKS_LOAD:
      return { ...state, load: true };

    case DONE_TASKS_SUCCESS:
      return { ...state, load: false, success: true };

    case DONE_TASKS_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};

export default taskReducer;
