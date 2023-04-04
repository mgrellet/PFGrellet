import {createAction, props} from "@ngrx/store";
import {Student} from "../model/student";

export const loadStudents = createAction(
  '[List Students] Load students'
);

export const studentsLoaded = createAction(
  '[List Students] Students loaded',
  props<{students: Student[]}>()
);
