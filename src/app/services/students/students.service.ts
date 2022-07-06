import { Injectable } from '@angular/core';
import { Student, Group } from '../../model/student.model';

@Injectable()
export class StudentsService {

  private students: Student[];
  private groups: Group[];

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
    return this.students;
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
