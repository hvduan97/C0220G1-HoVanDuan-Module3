import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanlyphieu',
  templateUrl: './quanlyphieu.component.html',
  styleUrls: ['./quanlyphieu.component.scss']
})
export class QuanlyphieuComponent implements OnInit {
  searchText: string;
  filters: Object;
  constructor() { }

  ngOnInit(): void {
  }

}
