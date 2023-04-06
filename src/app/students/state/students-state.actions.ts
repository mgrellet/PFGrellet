import { createAction, props } from '@ngrx/store';
import {Student} from "../../model/student";

export const loadStudentsStates = createAction(
  '[StudentsState] Load Students'
);

export const studentsStatesLoaded = createAction(
  '[StudentsState] Students loaded',
  props<{students: Student[]}>()
);

export const addStudentStates = createAction(
  '[StudentsState] Student added',
  props<{student: Student}>()
);

export const editStudentStates = createAction(
  '[StudentsState] Students edited',
  props<{student: Student}>()
);

export const deleteStudentStates = createAction(
  '[StudentsState] Students deleted',
  props<{student: Student}>()
);
