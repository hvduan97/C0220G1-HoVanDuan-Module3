import {Component, OnInit} from '@angular/core';
@Component({
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit{
  output: any;
  first: number;
  second: number;
  operator = '+';
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/': {
        if (this.second === 0) {
        this.output = 'You can\'t divide by zero';
        } else {this.output = this.first / this.second; }}
                break;
    }
  }

  constructor() { }
  ngOnInit(): void {
  }
}
