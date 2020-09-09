import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routingparam',
  templateUrl: './routingparam.component.html',
  styleUrls: ['./routingparam.component.scss']
})
export class RoutingparamComponent implements OnInit {
  contracts = [
    {id: 1, name: 'Teo', phoneNumber: '0123'},
    {id: 2, name: 'Ti', phoneNumber: '0456'},
    {id: 3, name: 'Tun', phoneNumber: '0789'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
