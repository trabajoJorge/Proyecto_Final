import { Student, Group } from '../../core/student.model';
import { StudentsService } from '../../core/students/students.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student-alta',
  templateUrl: './alta-student.component.html',
  styleUrls: ['./alta-student.component.css']
})

export class AltaStudentComponent implements OnInit {

  student: Student;
  groups: Group[];
  groups$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) {
      this.student= this.studentsService.newStudent();
      this.groups = this.studentsService.getGroups();
  }

  ngOnInit() {
    this.student= this.studentsService.newStudent();
    this.groups = this.studentsService.getGroups();
    this.groups$ = this.studentsService.getStudents();
    this.groups$.subscribe(groups => this.groups = groups);
  }

  newStudent(): void {
    this.studentsService.addStudent(this.student);
    this.student = this.studentsService.newStudent();
  }
}
