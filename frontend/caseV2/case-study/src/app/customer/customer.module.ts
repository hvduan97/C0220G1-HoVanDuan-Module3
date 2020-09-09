import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import {RoutingCustomerModule} from "./routing-customer.module";
import {CreateCusComponent} from "./create-cus/create-cus.component";
import {DetailCusComponent} from "./detail-cus/detail-cus.component";
import {EditCusComponent} from "./edit-cus/edit-cus.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [CustomerComponent,CreateCusComponent,DetailCusComponent,EditCusComponent],
  imports: [
    CommonModule,
    RoutingCustomerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbButtonsModule
  ]
})
export class CustomerModule { }
