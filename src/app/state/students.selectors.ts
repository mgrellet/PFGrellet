import {AppState} from "./app.state";
import {createSelector} from "@ngrx/store";
import {StudentsState} from "../model/students.state";

export const studentsSelector = (state: AppState) => {
  return state.students
}

export const loadingStudentSelector = createSelector(
  studentsSelector,
  (state: StudentsState) => {
    return state.loading;
  }
)

export const studentsLoadedSelector = createSelector(
  studentsSelector,
  (state: StudentsState) => {
    return state.students;
  }
)
