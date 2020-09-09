import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {StudentService} from './student.service';
import {Router, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// const routers = [
//   {path: 'student-detail/:id', component: StudentDetailComponent},
//   {path: 'student-edit/:id', component: StudentDetailComponent}
//  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
