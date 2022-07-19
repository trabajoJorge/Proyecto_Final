import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../core/students/students.service';
import { FormsModule } from '@angular/forms';
import { AltaStudentComponent } from '../features-modules/alta-student/alta-student.component';
import { ListOfStudentsComponent } from '../features-modules/list-of-students/list-of-students.component';


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
