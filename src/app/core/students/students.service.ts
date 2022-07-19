import { Injectable } from '@angular/core';
import { Student, Group } from '../student.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentsService {

  private students: Student[];
  private groups: Group[];
  private groups$ = new Subject<Student[]>();

  constructor() {
    this.groups = [
      {
        id: 0,
        name: 'Sin definir'
      },
      {
        id: 1,
        name: 'Activos'
      },
      {
        id: 2,
        name: 'Inactivos'
      },
      {
        id: 3,
        name: 'Expulsados'
      },
    ];
    this.students = [];
  }

  getGroups() {
    return this.groups;
  }

  getStudents() {
    return this.groups$.asObservable();
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  newStudent(): Student {
    return {
      id: this.students.length,
      name: '',
      address: '',
      group: 0
    };
  }

  deleteStudent(student: Student): void {
    var index = this.students.indexOf(student, 0)
    if (index > -1) {
      console.log(index)
      this.students.splice(index, 1)
    }
    this.students= this.getStudents()
  }
}
