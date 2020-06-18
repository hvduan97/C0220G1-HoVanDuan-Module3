import { Component, OnInit, Input } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;

  constructor(private service1: MyserviceService) { }

  ngOnInit(){
    this.service1.widthService = '75';
    this.width = this.service1.widthService;
  }

}
