import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {MyserviceService} from './th-name-card/myservice.service';

import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Test2Component } from './test2/test2.component';








@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
    imports: [
        BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule
    ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
