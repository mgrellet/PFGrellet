import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/student";
import {last} from "rxjs";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private service: StudentsService,
              private router: Router) {
  }

  form!: FormGroup;
  courses: string[] = [
    'Angular', 'ReactJS', 'Java', 'C#', 'Golang'
  ]

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
      this.form = this.formBuilder.group({
        name: [params.get('firstName'), Validators.required],
        lastName: [params.get('lastName'), Validators.required],
        email: [params.get('email'), [Validators.required, Validators.pattern(emailRegex)]],
        course: [params.get('course'), Validators.required],
        startDate: [new Date(params.get('startDate') || '')]
      })
    })
  }

  editStudent() {
    let student: Student = {
      firstName: this.form.value.name,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      course: this.form.value.course,
      startDate: this.form.value.startDate
    }
    this.service.editStudent(student);
    this.router.navigate(['students/management']);

  }
}
