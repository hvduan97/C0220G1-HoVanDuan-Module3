import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "./customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerList: Customer[];
  constructor(private serviceCusService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.serviceCusService.findAll().subscribe(
      next => this.customerList = next,
      error => {
        this.customerList = [];
        console.log(error);
      });
  }
  deleteById(id: number): void {
    if (confirm('Bạn có chắc muốn xóa không?')){
      this.serviceCusService.deleteById(id).subscribe(
        next => {this.customerList = this.customerList.filter(customer => customer.id !== id),alert('Đã xóa rồi!!')},
        error => console.log(error)

      );

    }

  }

  // key: string = 'name';
  // reverse: boolean = false;
  // sort(key){
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }
  p: number = 1;
  term: string;

}
