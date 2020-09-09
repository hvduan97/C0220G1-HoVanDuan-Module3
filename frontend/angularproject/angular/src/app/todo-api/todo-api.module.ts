import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoApiComponent } from './todo-api.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [TodoApiComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TodoApiModule { }
