import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Student} from "../../model/student";

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

  constructor() {
    this.students$ = new BehaviorSubject<Student[]>(this.students);
  }

  getStudentList(): Observable<Student[]> {
    return this.students$.asObservable();
  }

  addStudent(newStudent: Student): void {
    newStudent.id = this.generateId();
    this.students.push(newStudent);
    this.students$.next(this.students);
  }

  editStudent(editedStudent: Student): void {
    let index = this.students.findIndex((s: Student) => {
      return s.email == editedStudent.email;
    });

    if (index > -1) {
      this.students[index] = editedStudent;
      this.students$.next(this.students);
    }

  }

  removeStudent(studentToRemove: Student) {
    let index = this.students.findIndex((s: Student) => {
      return s.id = studentToRemove.id;
    });

    if (index > -1) {
      this.students.splice(index, 1);
      this.students$.next(this.students);
    }
  }

  generateId(): number{
    let maxId: number;
    // @ts-ignore
    maxId = Math.max(...this.students.map(s => s.id));
    return maxId + 1;
  }
}
