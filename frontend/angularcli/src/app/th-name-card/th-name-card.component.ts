import { Component, OnInit, Input } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-th-name-card',
  templateUrl: './th-name-card.component.html',
  styleUrls: ['./th-name-card.component.css']
})
export class ThNameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;



  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.service.phoneService = '0123456789';
    this.phone = this.service.phoneService;
    this.service.emailService = 'prodev@abc.xyz';
    this.email = this.service.emailService;
    this.service.cardNameService = 'Professional Dev';
    this.cardName = this.service.cardNameService;
  }
}
