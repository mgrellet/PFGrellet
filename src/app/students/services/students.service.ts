import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Student} from "../../model/student";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class StudentsService {

  private students: Student[] = [
    {
      id: 1,
      firstName: 'Martin',
      lastName: 'Grellet',
      course: 'Angular',
      email: 'martin@test.com',
      startDate: new Date(2023, 0, 1),
    },
    {
      id: 2,
      firstName: 'Enzo',
      lastName: 'Fernandez',
      course: 'Angular',
      email: 'enzo@test.com',
      startDate: new Date(2023, 2, 2),
    },
    {
      id: 3,
      firstName: 'Julian',
      lastName: 'Alvarez',
      course: 'ReactJS',
      email: 'julian@test.com',
      startDate: new Date(),
    }
  ]

  private students$: BehaviorSubject<Student[]>;

  constructor(private snackBar: MatSnackBar) {
    this.students$ = new BehaviorSubject<Student[]>(this.students);
  }

  getStudentList(): Observable<Student[]> {
    return this.students$.asObservable();
  }

  addStudent(newStudent: Student): void {
    newStudent.id = this.generateId();
    this.students.push(newStudent);
    this.students$.next(this.students);
    this.openSnackBar(newStudent.firstName + " " + newStudent.lastName+ " agregado");
  }

  editStudent(editedStudent: Student): void {
    let index = this.students.findIndex((s: Student) => {
      return s.email === editedStudent.email;
    });

    if (index > -1) {
      this.students[index] = editedStudent;
      this.students$.next(this.students);
      this.openSnackBar(editedStudent.firstName + " " + editedStudent.lastName+ " actualizado");

    }

  }

  removeStudent(studentToRemove: Student) {
    let index = this.students.findIndex((s: Student) => {
      return s.id === studentToRemove.id;
    });
    console.log("to delete", this.students[index]);

    if (index > -1) {
      this.students.splice(index, 1);
      this.students$.next(this.students);
      this.openSnackBar(studentToRemove.firstName + " " + studentToRemove.lastName+ " eliminado");

    }
  }

  generateId(): number {
    if(this.students.length === 0){
      return 1;
    }
    // @ts-ignore
    let maxId = Math.max(...this.students.map(s => s.id));
    return maxId + 1;
  }

  openSnackBar(message: string){
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
