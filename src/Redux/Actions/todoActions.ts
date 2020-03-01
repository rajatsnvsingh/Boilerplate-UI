import { ITask } from "../../Models/Task";
import { todoActionTypes, ADD_TASK } from "./todoActionTypes";

export function addTask (newTask: ITask): todoActionTypes {
    return {
        type: ADD_TASK,
        payload:newTask
    }
}