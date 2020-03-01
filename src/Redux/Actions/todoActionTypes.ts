import { ITask } from "../../Models/Task";

export const ADD_TASK = 'ADD_TASK';

interface IAddTask {
    type: typeof ADD_TASK,
    payload: ITask
}

export type todoActionTypes = IAddTask