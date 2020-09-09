import { NgModule } from '@angular/core';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {RouterModule} from '@angular/router';

const routers = [
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-edit/:id', component: StudentDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers)
  ]
})
export class AppRoutingModule { }
