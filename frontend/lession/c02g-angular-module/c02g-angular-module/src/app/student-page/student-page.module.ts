import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPageComponent} from './student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student-routing.module';
import {StudentService} from './student.service';

@NgModule({
  declarations: [StudentPageComponent, StudentDetailComponent],
  exports: [
    StudentPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule
  ],
  providers: [
  ]
})
export class StudentPageModule {
}
