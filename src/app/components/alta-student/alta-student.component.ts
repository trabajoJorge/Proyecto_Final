import { Student, Group } from '../../model/student.model';
import { StudentsService } from '../../services/students/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-alta',
  templateUrl: './alta-student.component.html',
  styleUrls: ['./alta-student.component.css']
})

export class AltaStudentComponent implements OnInit {

  student: Student;
  groups: Group[];

  constructor(private studentsService: StudentsService) {
      this.student= this.studentsService.newStudent();
      this.groups = this.studentsService.getGroups();
  }

  ngOnInit() {
    this.student= this.studentsService.newStudent();
    this.groups = this.studentsService.getGroups();
  }

  newStudent(): void {
    this.studentsService.addStudent(this.student);
    this.student = this.studentsService.newStudent();
  }
}
