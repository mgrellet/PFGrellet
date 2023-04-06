import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap} from 'rxjs/operators';
import {map} from 'rxjs';
import * as StudentsStateActions from './students-state.actions';
import {StudentsService} from "../services/students.service";
import {Student} from "../../model/student";
import {Router} from "@angular/router";

@Injectable()
export class StudentsStateEffects {

  constructor(private studentsService: StudentsService,
              private actions$: Actions,
              private router: Router
  ) {
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


  createStudentStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.addStudentStates),
      concatMap(({student}) => {
          return this.studentsService.addStudent(student).pipe(
            map((student: Student) => {
                this.router.navigate(['students/management']);
                return StudentsStateActions.loadStudentsStates();

              }
            )
          )
        }
      )
    );
  });
  /*
  editStudent;
  deleteStudent;*/

}
