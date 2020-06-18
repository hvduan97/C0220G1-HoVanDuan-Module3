import {Component, OnInit} from '@angular/core';
@Component({
  templateUrl: './color.component.html'
})
export class ColorComponent implements OnInit{
  abc = '';
  background;
  onChange(value) {
    this.background = value;
  }

  constructor() { }
  ngOnInit(): void {
  }

}
