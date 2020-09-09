import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BillService} from "../bill.service";
import {Router} from "@angular/router";
import {DoiTac} from "../doi-tac";
import {NhanVien} from "../nhan-vien";
import {VanChuyen} from "../van-chuyen";
import {Phieu} from "../phieu";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  doiTacs: DoiTac[];
  nhanViens: NhanVien[];
  vanChuyens: VanChuyen[];
  tenkhos: Phieu[];

  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any>  = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private userService: BillService,
              private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      id: [''],
      TenKho: [''],
      TenDT: [''],
      TenNV: [''],
      TenVC: ['']
    });

    this.userService.findAllDt().subscribe(
      next => this.doiTacs = next,
      error => {
        this.doiTacs = [];
        console.log(error);
      });

    this.userService.findAllNv().subscribe(
      next => this.nhanViens = next,
      error => {
        this.nhanViens = [];
        console.log(error);
      });

    this.userService.findAllVc().subscribe(
      next => this.vanChuyens = next,
      error => {
        this.vanChuyens = [];
        console.log(error);
      });

    this.userService.findAllPh().subscribe(
      next => this.tenkhos = next,
      error => {
        this.tenkhos = [];
        console.log(error);
      });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}
