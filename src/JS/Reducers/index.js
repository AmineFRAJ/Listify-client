import { combineReducers } from "redux";
import taskReducer from "./TaskReducers";
import AuthReducer from "./AuthReducer";
 
 


const RootReducer = combineReducers({ taskReducer,AuthReducer})

export default RootReducer