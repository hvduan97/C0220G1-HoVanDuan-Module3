import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgHomeComponent} from "./img-home.component";



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent,ImgHomeComponent],
  exports: [
    ImgSlideComponent,
    ImgSliderComponent,
    ImgHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImgSliderModule { }
