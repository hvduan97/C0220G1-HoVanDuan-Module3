import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {RouterModule} from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';

const routers = [
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'create-student', component: CreateStudentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ]
})
export class StudentRoutingModule {
}
