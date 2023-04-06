import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentFormComponent} from './components/student-form/student-form.component';
import {StudentManagementComponent} from './components/student-management/student-management.component';
import {StudentsRoutingModule} from "./students-routing.module";
import {StudentsService} from "./services/students.service";
import {CompleteNamePipe} from './pipes/complete-name.pipe';
import {StudentEditFormComponent} from './components/student-edit-form/student-edit-form.component';
import {MaterialModule} from "../shared/material/material.module";
import {NotFoundComponent} from "../core/components/not-found/not-found.component";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducer, studentsStateFeatureKey} from "./state/students-state.reducer";
import {EffectsModule} from "@ngrx/effects";
import {StudentsStateEffects} from "./state/students-state.effects";


@NgModule({
  declarations: [
    StudentFormComponent,
    StudentManagementComponent,
    CompleteNamePipe,
    StudentEditFormComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature(studentsStateFeatureKey, reducer),
    EffectsModule.forFeature([StudentsStateEffects])
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule {
}
