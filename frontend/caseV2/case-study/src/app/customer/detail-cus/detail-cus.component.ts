import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-detail-cus',
  templateUrl: './detail-cus.component.html',
  styleUrls: ['./detail-cus.component.scss']
})
export class DetailCusComponent implements OnInit {

  customer = new Customer();
  constructor(private activatedRoute: ActivatedRoute,
              private serviceCusService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      this.serviceCusService.findById(id).subscribe(
        next => this.customer = next,
        error => console.log(error)
      );
    });
  }

}
