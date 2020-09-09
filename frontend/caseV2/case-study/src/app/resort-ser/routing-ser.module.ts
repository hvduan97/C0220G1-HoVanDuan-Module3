import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateSerComponent} from "./create-ser/create-ser.component";
import {ResortSerComponent} from "./resort-ser.component";

const routes: Routes = [
  {path: 'create-ser',component: CreateSerComponent},
  {path: 'list-ser',component: ResortSerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingSerModule { }
