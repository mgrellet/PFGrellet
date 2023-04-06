import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap} from 'rxjs/operators';
import {map} from 'rxjs';
import * as StudentsStateActions from './students-state.actions';
import {StudentsService} from "../services/students.service";
import {Student} from "../../model/student";

@Injectable()
export class StudentsStateEffects {

  constructor(private studentsService: StudentsService,
              private actions$: Actions) {
  }

  loadStudentsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.loadStudentsStates),
      concatMap(() => {
        return this.studentsService.getStudentList().pipe(
          map((s: Student[]) =>
            StudentsStateActions.studentsStatesLoaded({students: s}))
        )
      })
    );
  });
/*
  createStudent;
  editStudent;
  deleteStudent;*/

}
