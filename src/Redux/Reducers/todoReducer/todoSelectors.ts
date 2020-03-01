import { createSelector } from "reselect";
import { IGlobalState } from "../rootReducer";

const taskSelector = (state:IGlobalState) => state.todo;

const selectAllTasks = createSelector(
    taskSelector,
    (tasks) => tasks
);

export {selectAllTasks};