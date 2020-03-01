import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer/todoReducer";
import { ITodoState } from "./todoReducer/todoReducer.logic";

export const rootReducer = combineReducers({
    todo: todoReducer
  })

export interface IGlobalState {
  todo: ITodoState
}