import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer/todoReducer";

export const rootReducer = combineReducers({
    todo: todoReducer
  })