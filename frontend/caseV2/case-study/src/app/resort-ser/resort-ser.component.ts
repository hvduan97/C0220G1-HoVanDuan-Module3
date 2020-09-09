import { Component, OnInit } from '@angular/core';
import {Villa} from "./villa";
import {House} from "./house";
import {Room} from "./room";
import {MySerService} from "./my-ser.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resort-ser',
  templateUrl: './resort-ser.component.html',
  styleUrls: ['./resort-ser.component.scss']
})
export class ResortSerComponent implements OnInit {
  typeService;


  villas: Villa[];
  houses: House[];
  rooms: Room[];
  constructor(private mySerService: MySerService, private router: Router) { }

  getType() {
    this.typeService = this.typeService.value;
    console.log(this.typeService);
  }

  ngOnInit(): void {
    this.mySerService.findAllVilla().subscribe(
      next => this.villas = next,
      error => {
        this.villas = [];
        console.log(error);
      });
  }
  deleteById(id: number): void {
    if (confirm('Bạn có chắc muốn xóa không?')){
      this.mySerService.deleteByIdVilla(id).subscribe(
        next => {this.villas = this.villas.filter(customer => customer.id !== id),alert('Đã xóa rồi!!')},
        error => console.log(error)

      );

    }

  }
  p: number = 1;
  term: string;
}
