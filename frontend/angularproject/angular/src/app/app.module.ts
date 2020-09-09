import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/token";
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {BlogModule} from "./blog/blog.module";
import {TodoApiModule} from "./todo-api/todo-api.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./todo-api/token.interceptor";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgOptionComponent} from "@ng-select/ng-select/lib/ng-option.component";
import { Test2Component } from './test2/test2.component';



@NgModule({
  declarations: [
    AppComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImageGalleryModule,
    ImgSliderModule,
    BlogModule,
    TodoApiModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
