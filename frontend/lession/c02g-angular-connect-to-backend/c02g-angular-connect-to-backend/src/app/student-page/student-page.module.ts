import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPageComponent} from './student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StudentPageComponent, StudentDetailComponent, CreateStudentComponent],
  exports: [
    StudentPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        StudentRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
  ]
})
export class StudentPageModule {
}
