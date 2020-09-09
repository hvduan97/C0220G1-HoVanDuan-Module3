import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {RouterModule} from '@angular/router';

const routers = [
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-edit/:id', component: StudentDetailComponent}
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
