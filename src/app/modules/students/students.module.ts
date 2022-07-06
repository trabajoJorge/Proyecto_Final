import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students/students.service';
import { FormsModule } from '@angular/forms';
import { AltaStudentComponent } from '../../components/alta-student/alta-student.component';
import { ListOfStudentsComponent } from '../../components/list-of-students/list-of-students.component';


@NgModule({
  declarations: [AltaStudentComponent, ListOfStudentsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AltaStudentComponent,
    ListOfStudentsComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
