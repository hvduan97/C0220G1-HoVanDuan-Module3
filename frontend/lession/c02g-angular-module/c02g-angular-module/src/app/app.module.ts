import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentPageModule} from './student-page/student-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
