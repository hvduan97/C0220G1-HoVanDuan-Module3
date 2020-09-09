import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ServiceEmployeeService} from "../service-employee.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  employee = new Employee();
  constructor(private activatedRoute: ActivatedRoute,
              private serviceEmployeeService: ServiceEmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      this.serviceEmployeeService.findById(id).subscribe(
        next => this.employee = next,
        error => console.log(error)
      );
    });
  }

}
