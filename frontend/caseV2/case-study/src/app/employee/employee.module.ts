import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {RoutingEmployeeModule} from "./routing-employee.module";
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [EmployeeComponent, CreateComponent, ListComponent, DetailComponent, EditComponent],
  imports: [
    CommonModule,
    RoutingEmployeeModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbButtonsModule
  ]
})
export class EmployeeModule { }
