import { createAction, props } from '@ngrx/store';
import {Student} from "../../model/student";

export const loadStudentsStates = createAction(
  '[StudentsState] Load StudentsStates'
);

export const studentsStatesLoaded = createAction(
  '[StudentsState] StudentsState loaded',
  props<{students: Student[]}>()
);
