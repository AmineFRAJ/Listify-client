import {
  CLEAR_ERRORS_AUTH,
    CLEAR_SUCCESS_AUTH,
    CURRENT_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOAD,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_LOAD,
  REGISTER_USER_SUCCESS,
} from "../ActionsTypes/AuthActionsTypes";

const initialState = {
  user: null,
  loadUser: false,
  success: null,
  errors: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_LOAD:
      return { ...state, loadUser: true };

    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.newUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case REGISTER_USER_FAIL:
      return { ...state, loadUser: false, errors: payload, success: null };

    case LOGIN_USER_LOAD:
      return { ...state, loadUser: true };

    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.foundUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        loadUser: false,
        errors: payload,
        success: null,
      };

    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: null, isAuth: false };
      
    case CURRENT_USER:
      return { ...state, user: payload, loadUser: false, isAuth: true };

      case CLEAR_ERRORS_AUTH:
        return { ...state, errors: null };
  
      case CLEAR_SUCCESS_AUTH:
        return { ...state, success: null };
    default:
      return state;
  }
};
export default AuthReducer;
