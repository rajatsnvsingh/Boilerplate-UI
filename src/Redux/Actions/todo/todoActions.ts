import { ITask } from "../../../Models/Task";
import { todoActionTypes, ADD_TASK, CHECK_TASK, REMOVE_TASK, EDIT_TASK } from "./todoActionTypes";

export function addTask (newTask: ITask): todoActionTypes {
    return {
        type: ADD_TASK,
        payload:newTask
    }
}

export function checkTask (taskId: Number): todoActionTypes {
    return {
        type: CHECK_TASK,
        payload: taskId
    }
}

export function removeTask (taskToRemove: Number): todoActionTypes {
    return {
        type: REMOVE_TASK,
        payload:taskToRemove
    }
}
export function editTask (editedTask: ITask): todoActionTypes {
    return {
        type: EDIT_TASK,
        payload:editedTask
    }
}