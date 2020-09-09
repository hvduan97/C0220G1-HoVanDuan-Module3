import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './testcomponent/test.component';
import {ColorComponent} from './colorpicker/color.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ThNameCardComponent} from './th-name-card/th-name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {PComponent} from './th-name-card/parent.component';
import {ParentodoComponent} from './todo/parentodo.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const routesConfig: Routes = [
  {path: 'home', component : TestComponent},
  {path: 'colorpicker', component : ColorComponent},
  {path: 'calculator', component : CalculatorComponent},
  {path: 'namecard', component : PComponent},
  {path: 'progressbar', component : ProgressBarComponent},
  {path: 'ratingbar', component : RatingBarComponent},
  {path: 'todo', component : ParentodoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig), FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [
    // tslint:disable-next-line:max-line-length
    TestComponent, ColorComponent, CalculatorComponent, ThNameCardComponent, ProgressBarComponent,
    RatingBarComponent, PComponent, ParentodoComponent, TodoComponent
  ],
  exports: [RouterModule, ThNameCardComponent] /*Không có sẽ không hiểu router outlet*/
})

export class AppRoutingModule {
}
