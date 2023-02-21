import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentFormComponent} from './components/student-form/student-form.component';
import {StudentManagementComponent} from './components/student-management/student-management.component';
import {StudentsRoutingModule} from "./students-routing.module";
import {StudentsService} from "./services/students.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { StudentEditFormComponent } from './components/student-edit-form/student-edit-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    StudentFormComponent,
    StudentManagementComponent,
    CompleteNamePipe,
    StudentEditFormComponent,

  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule {
}
