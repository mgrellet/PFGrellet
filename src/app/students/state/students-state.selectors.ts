import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsState from './students-state.reducer';

export const selectStudentsState = createFeatureSelector<fromStudentsState.StudentsState>(
  fromStudentsState.studentsStateFeatureKey
);

export const loadingStudentSelector = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentsState) => state.loading);

export const studentsLoadedSelector = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentsState) => state.students);
