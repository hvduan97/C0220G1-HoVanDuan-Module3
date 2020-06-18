import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './testcomponent/test.component';
import {ColorComponent} from './colorpicker/color.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ThNameCardComponent} from './th-name-card/th-name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const routesConfig: Routes = [
  {path: 'home', component : TestComponent},
  {path: 'colorpicker', component : ColorComponent},
  {path: 'calculator', component : CalculatorComponent},
  {path: 'namecard', component : ThNameCardComponent},
  {path: 'progressbar', component : ProgressBarComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig), FormsModule, CommonModule],
  declarations: [
    TestComponent, ColorComponent, CalculatorComponent, ThNameCardComponent, ProgressBarComponent
  ],
  exports: [RouterModule, ThNameCardComponent] /*Không có sẽ không hiểu router outlet*/
})

export class AppRoutingModule {
}
