import { Student, Group } from '../../model/student.model';
import { StudentsService } from '../../services/students/students.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})

export class ListOfStudentsComponent implements OnInit {

  students: Student[]

  constructor(private studentsService: StudentsService, private fb:FormBuilder) {
    this.students= this.studentsService.getStudents()
  }


  ngOnInit() {
    this.students= this.studentsService.getStudents()
  }

  deleteStudent(student: Student): void {
    this.studentsService.deleteStudent(student)
  }


}
