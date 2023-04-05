import {createFeature, createReducer, on} from '@ngrx/store';
import * as StudentsStateActions from './students-state.actions';
import {Student} from "../model/student";

export const studentsStateFeatureKey = 'studentsState';

export interface StudentsState {
  students: Student[];
  loading: boolean;
}

export const initialState: StudentsState = {
  loading: false,
  students: []
};

export const reducer = createReducer(
  initialState,
  on(StudentsStateActions.loadStudentsStates, state => {
    return {...state, loading: true};
  }),
  on(StudentsStateActions.studentsStatesLoaded, (state, {students}) => {
    return {...state, loading: false, students: students};
  })
);

export const studentsStateFeature = createFeature({
  name: studentsStateFeatureKey,
  reducer,
});

