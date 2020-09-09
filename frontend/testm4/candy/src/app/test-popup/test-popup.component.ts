import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-popup',
  templateUrl: './test-popup.component.html',
  styleUrls: ['./test-popup.component.scss']
})

export class TestPopupComponent implements OnInit {
  panelNum: number;

  next() {
    if (this.panelNum < 5) this.panelNum++; else this.panelNum = 1;
  }

  prev() {
    if (this.panelNum > 1) this.panelNum--; else this.panelNum = 5;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
