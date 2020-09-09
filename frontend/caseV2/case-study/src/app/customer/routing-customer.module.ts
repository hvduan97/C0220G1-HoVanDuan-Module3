import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCusComponent} from "./create-cus/create-cus.component";
import {CustomerComponent} from "./customer.component";
import {DetailCusComponent} from "./detail-cus/detail-cus.component";
import {EditCusComponent} from "./edit-cus/edit-cus.component";
import {EmployeeComponent} from "../employee/employee.component";

const routes: Routes = [
  {path: 'create-cus',component: CreateCusComponent},
  {path: 'list-cus',component: CustomerComponent},
  {path: 'cus-detail/:id',component: DetailCusComponent},
  {path: 'cus-edit/:id',component: EditCusComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', component: EmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingCustomerModule { }
