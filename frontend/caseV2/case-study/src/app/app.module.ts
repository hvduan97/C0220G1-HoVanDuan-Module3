import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EmployeeModule} from "./employee/employee.module";
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./customer/customer.module";
import {ResortSerModule} from "./resort-ser/resort-ser.module";
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormDirective } from './form.directive';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        EmployeeModule,
        HttpClientModule,
        CustomerModule,
        ResortSerModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
