import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ServiceEmployeeService} from "../service-employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeeList: Employee[];
  constructor(private serviceEmployeeService: ServiceEmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.serviceEmployeeService.findAll().subscribe(
      next => this.employeeList = next,
      error => {
        this.employeeList = [];
        console.log(error);
      });
  }
  deleteById(id: number): void {
    if (confirm('Bạn có chắc muốn xóa không?')){
      this.serviceEmployeeService.deleteById(id).subscribe(
        next => {this.employeeList = this.employeeList.filter(employee => employee.id !== id),alert('Đã xóa rồi!!')},
        error => console.log(error)

      );

    }

  }

  p: number = 1;
  term: string;

}
