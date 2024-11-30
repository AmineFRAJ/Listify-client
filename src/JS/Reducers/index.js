import { combineReducers } from "redux";
import taskReducer from "./TaskReducers";
 
 


const RootReducer = combineReducers({ taskReducer})

export default RootReducer