import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/student";
import {StudentsService} from "../../services/students.service";
import {Store} from "@ngrx/store";
import {StudentsState} from "../../state/students-state.reducer";
import {addStudentStates} from "../../state/students-state.actions";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private service: StudentsService,
              private store: Store<StudentsState>) {
  }

  form!: FormGroup;
  courses: string[] = [
    'Angular', 'ReactJS', 'Java', 'C#', 'Golang'
  ]

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      startDate: ['']
    })

  }


  addStudent() {
    let student: Student = {
      firstName: this.form.value.name,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      course: this.form.value.course,
      startDate: this.form.value.startDate
    }

    this.store.dispatch(addStudentStates({student: student}));

  }
}
