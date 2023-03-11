import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {env} from "../../../environment/environment";

@Injectable()
export class StudentsService {


  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {
  }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(`${env.apiURL}/students`);

  }

  addStudent(newStudent: Student): Observable<Student> {
    return this.http.post<Student>(`${env.apiURL}/students`, newStudent)
  }

  editStudent(editedStudent: Student): Observable<Student> {
    return this.http.put<Student>(`${env.apiURL}/students/${editedStudent.id}`, editedStudent);
  }

  removeStudent(studentToRemove: Student): Observable<Student> {
    return this.http.delete<Student>(`${env.apiURL}/students/${studentToRemove.id}`)
  }

}
