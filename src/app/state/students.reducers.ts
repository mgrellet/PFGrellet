import {StudentsState} from "../model/students.state";
import {createReducer, on} from "@ngrx/store";
import {loadStudents, studentsLoaded} from "./students.action";

const initialState: StudentsState = {
  loading: false,
  students: []
}

export const studentsReducer = createReducer(
  initialState,
  on(loadStudents, state => {
    const newState: StudentsState = {
      loading: true,
      students: state.students
    }
    return newState
  }),
  on(studentsLoaded, (state, {students}) => {
    const newState: StudentsState = {
      loading: false,
      students: students
    }
    return newState
  })
)
