import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/student";
import {StudentsService} from "../../services/students.service";
import {Store} from "@ngrx/store";
import {StudentsState} from "../../state/students-state.reducer";
import {editStudentStates} from "../../state/students-state.actions";

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private service: StudentsService,
              private router: Router,
              private store: Store<StudentsState>) {
  }

  form!: FormGroup;
  courses: string[] = ['Angular', 'ReactJS', 'Java', 'C#', 'Golang']

  studentId!: string;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.studentId = params.get('id') || '';
      let parsedStartDate = new Date(parseInt(<string>params.get('startDate')) * 1000);
      this.form = this.formBuilder.group({
        name: [params.get('firstName'), Validators.required],
        lastName: [params.get('lastName'), Validators.required],
        email: [params.get('email'), [Validators.required, Validators.email]],
        course: [params.get('course'), Validators.required],
        startDate: parsedStartDate
      })
    })
  }

  editStudent() {
    let student: Student = {
      id: this.studentId,
      firstName: this.form.value.name,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      course: this.form.value.course,
      startDate: this.form.value.startDate
    }
    this.store.dispatch(editStudentStates({student: student}));

  }
}
