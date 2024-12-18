import axios from "axios";
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

// Register
export const register =
  ({ newUser, navigate }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_USER_LOAD });
    try {
      let result = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, newUser);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: result.data });
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.errors,
      });
    }
  };

// login
export const login =
  ({ user, navigate }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOAD });
    try {
      let result = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, user);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.errors });
    }
  };

// logout
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};


// current
export const current = () => async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOAD });
    try {
      const config = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      console.log(config);
      let result = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/current`, config);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.errors });
    }
  };// clear errors
  export const clearErrorsAuth = () => {
    return {
      type: CLEAR_ERRORS_AUTH,
    };
  };
  
  // clear success
  export const clearSuccessAuth = () => {
    return {
      type: CLEAR_SUCCESS_AUTH,
    };
  };