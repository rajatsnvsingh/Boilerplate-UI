import {ITodoState} from "./todoReducer.logic";
import { ADD_TASK, todoActionTypes, EDIT_TASK, REMOVE_TASK, CHECK_TASK } from "../../Actions/todo/todoActionTypes";
import { ITask } from "../../../Models/Task";

const initialState:ITodoState = {
    tasks: []
}

const todoReducer = (
    state = initialState,
    action: todoActionTypes
) : ITodoState => {
    switch (action.type) {
        case ADD_TASK:{
            const newTaskList = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: newTaskList
            }
        }
        case REMOVE_TASK: {
            const taskToRemoveId = action.payload;
            const newTaskList: ITask[] = [...state.tasks].filter((task:ITask)=> task.id !== taskToRemoveId);
            return {
                ...state,
                tasks: newTaskList
            }
        }
        case CHECK_TASK: {
            const taskToCheckId = action.payload;
            let editedTaskList: ITask[] = [...state.tasks];
            editedTaskList[editedTaskList.findIndex((el:ITask)=>el.id===taskToCheckId)].Status="completed";
            return {
                ...state,
                tasks: editedTaskList
            }
        }
        case EDIT_TASK:{
            const editedTask: ITask = action.payload;
            let editedTaskList: ITask[] = [...state.tasks];
            editedTaskList[editedTaskList.findIndex((el:ITask)=>el.id===editedTask.id)] = editedTask;
            return {
                ...state,
                tasks: editedTaskList
            }
        }
        default:
            return state;

    }
}

export {todoReducer};