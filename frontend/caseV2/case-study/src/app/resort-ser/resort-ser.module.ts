import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResortSerComponent } from './resort-ser.component';
import {RoutingSerModule} from "./routing-ser.module";
import { CreateSerComponent } from './create-ser/create-ser.component';
import { DetailSerComponent } from './detail-ser/detail-ser.component';
import { EditSerComponent } from './edit-ser/edit-ser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ResortSerComponent, CreateSerComponent, DetailSerComponent, EditSerComponent],
  imports: [
    CommonModule,
    RoutingSerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ResortSerModule { }
