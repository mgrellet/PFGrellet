import {TestBed} from '@angular/core/testing';

import {StudentsService} from './students.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {Student} from "../../model/student";

describe('StudentsService', () => {
  let service: StudentsService;
  let httpClientSpy:
    { get: jasmine.Spy,
      post: jasmine.Spy,
      delete: jasmine.Spy,
      put: jasmine.Spy
    }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'put']);
    service = new StudentsService(httpClientSpy as any);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get Student list', (done: DoneFn) => {
    const mockList: Student[] = [
      {
        firstName: "Aly",
        lastName: "Pfeffer",
        course: "ReactJS",
        email: "maxbruen@yahoo.com",
        startDate: new Date(),
        id: "4"
      },
      {
        firstName: "Dion",
        lastName: "Bergstrom",
        course: "Golang",
        email: "Ryan_Reynolds35@yahoo.com",
        startDate: new Date(),
        id: "5"
      }];

    httpClientSpy.get.and.returnValue(of(mockList));

    service.getStudentList().subscribe((students: Student[]) => {
      expect(students).toEqual(mockList);
      done();
    });

  });

  it('Add Student', (done: DoneFn) => {
    const studentMock: Student =
      {
        firstName: "Aly",
        lastName: "Pfeffer",
        course: "ReactJS",
        email: "maxbruen@yahoo.com",
        startDate: new Date(),
        id: "4"
      };

    httpClientSpy.post.and.returnValue(of(studentMock));

    service.addStudent(studentMock).subscribe((student: Student) => {
      expect(student).toEqual(studentMock);
      done();
    });

    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);

  });


  it('Delete Student', (done: DoneFn) => {
    const studentMock: Student =
      {
        firstName: "Aly",
        lastName: "Pfeffer",
        course: "ReactJS",
        email: "maxbruen@yahoo.com",
        startDate: new Date(),
        id: "4"
      };

    httpClientSpy.delete.and.returnValue(of(studentMock));

    service.removeStudent(studentMock).subscribe((students: Student) => {
      expect(students).toEqual(studentMock);
      done();
    });

    expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);

  });

  it('Update Student', (done: DoneFn) => {
    const studentMock: Student =
      {
        firstName: "Aly",
        lastName: "Pfeffer",
        course: "ReactJS",
        email: "maxbruen@yahoo.com",
        startDate: new Date(),
        id: "4"
      };

    httpClientSpy.put.and.returnValue(of(studentMock));

    service.editStudent(studentMock).subscribe((student: Student) => {
      expect(student).toEqual(studentMock);
      done();
    });

    expect(httpClientSpy.put).toHaveBeenCalledTimes(1);

  });

});
