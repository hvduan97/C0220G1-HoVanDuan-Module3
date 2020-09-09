import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {TodoComponent} from "./todo/todo.component";
import {CommonModule} from "@angular/common";
import {RegistorComponent} from "./registor/registor.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateUtilComponent} from "./date-util/date-util.component";
import {LoginComponent} from "./login/login.component";
import {RoutingparamComponent} from "./routingparam/routingparam.component";
import {DetailComponent} from "./routingparam/detail.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {ExampleServiceComponent} from "./example-service/example-service.component";
import {StudentDetailComponent} from "./example-service/student-detail/student-detail.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";

import {ImgSliderModule} from "./img-slider/img-slider.module";
import {ImgHomeComponent} from "./img-slider/img-home.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogDetailComponent} from "./blog/blog-detail/blog-detail.component";
import {BlogEditComponent} from "./blog/blog-edit/blog-edit.component";
import {TodoApiComponent} from "./todo-api/todo-api.component";




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todo-api', component: TodoApiComponent},
  {path: 'register', component: RegistorComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogDetailComponent},
  {path: 'blog/:id/edit', component: BlogEditComponent},
  {path: 'img-home', component: ImgHomeComponent},
  {path: 'image-gallery', component: ImageGalleryComponent},
  {path: 'example', component: ExampleServiceComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'dictionary-detail/:key', component: DictionaryDetailComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'routing-param', component: RoutingparamComponent},
  {path: 'login', component: LoginComponent},
  {path: 'date-util', component: DateUtilComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'todo', component: TodoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbDropdownModule, CommonModule, ReactiveFormsModule, FormsModule, ImgSliderModule],
  declarations: [
    HomeComponent,TodoComponent,RegistorComponent,SignUpComponent,DateUtilComponent,LoginComponent,RoutingparamComponent,
    DetailComponent,DictionaryComponent,ExampleServiceComponent,StudentDetailComponent,DictionaryDetailComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
