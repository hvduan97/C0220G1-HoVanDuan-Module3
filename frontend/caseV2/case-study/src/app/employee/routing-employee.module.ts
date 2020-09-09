import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {EditComponent} from "./edit/edit.component";
import {EmployeeComponent} from "./employee.component";

const routes: Routes = [
  {path: 'employee-detail/:id',component: DetailComponent},
  {path: 'create-employee',component: CreateComponent},
  {path: 'list-employee',component: ListComponent},
  {path: '',component: EmployeeComponent},
  {path: 'employee-edit/:id',component: EditComponent},
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
export class RoutingEmployeeModule { }
