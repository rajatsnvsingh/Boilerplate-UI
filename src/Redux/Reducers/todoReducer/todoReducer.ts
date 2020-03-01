import {ITodoState} from "./todoReducer.logic";
import { ADD_TASK, todoActionTypes } from "../../Actions/todoActionTypes";

const initialState:ITodoState = {
    tasks: []
}

const todoReducer = (
    state = initialState,
    action: todoActionTypes
) : ITodoState => {
    switch (action.type) {

        case ADD_TASK:
            const newTaskList = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: newTaskList
            }

        default:
            return state;

    }
}

export {todoReducer};