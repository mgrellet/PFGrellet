import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../model/student";
import {StudentsService} from "../../services/students.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {SessionService} from "../../../core/service/session.service";
import {Session} from "../../../model/session";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Store} from "@ngrx/store";
import {deleteStudentStates, loadStudentsStates} from "../../state/students-state.actions";
import {loadingStudentSelector, studentsLoadedSelector} from "../../state/students-state.selectors";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit, OnDestroy {

  constructor(private studentService: StudentsService,
              private router: Router,
              private sessionService: SessionService,
              private snackBar: MatSnackBar,
              private store: Store
  ) {
  }



  students$!: Observable<Student[]>;
  students!: Student[];

  subscription!: Subscription;

  dataSource!: MatTableDataSource<Student>;

  loadingTable$!: Observable<boolean>

  ngOnInit(): void {
    this.store.dispatch(loadStudentsStates())

    this.loadingTable$ = this.store.select(loadingStudentSelector);

    this.store.select(studentsLoadedSelector).subscribe(studentFromStore => {
      this.dataSource = new MatTableDataSource<Student>(studentFromStore);
    });

    this.sessionService.getSession().subscribe((session: Session) => {
    })
  }

  ngOnDestroy(): void {
    this.sessionService.getSession().subscribe().unsubscribe();
  }

  displayedColumns: string[] = ['name', 'email', 'course', 'startDate', 'actions'];

  editStudent(element: Student) {
    this.router.navigate(['students/edit-form', element]);
  }

  deleteStudent(student: Student) {

    this.store.dispatch(deleteStudentStates({student: student}));
    this.ngOnInit();
    this.openSnackBar(`${student.firstName} ${student.lastName} eliminado`);

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
