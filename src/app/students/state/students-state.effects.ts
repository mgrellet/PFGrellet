import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as StudentsStateActions from './students-state.actions';

@Injectable()
export class StudentsStateEffects {


  loadStudentsStates$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StudentsStateActions.loadStudentsStates),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
