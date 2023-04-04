import {StudentsState} from "../model/students.state";
import {ActionReducerMap} from "@ngrx/store";
import {studentsReducer} from "./students.reducers";

export interface AppState{
  students: StudentsState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  students: studentsReducer
}
