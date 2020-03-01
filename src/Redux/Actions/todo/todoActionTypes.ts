import { ITask } from "../../../Models/Task";

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const EDIT_TASK = 'EDIT_TASK';

interface IAddTask {
    type: typeof ADD_TASK,
    payload: ITask
}
interface IRemoveTask {
    type: typeof REMOVE_TASK,
    payload: Number
}
interface ICheckTask {
    type: typeof CHECK_TASK,
    payload: Number
}
interface IEditTask {
    type: typeof EDIT_TASK,
    payload: ITask
}

export type todoActionTypes = IAddTask | IRemoveTask | ICheckTask | IEditTask;