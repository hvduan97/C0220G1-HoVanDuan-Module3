import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BillService} from "../bill.service";
import {Router} from "@angular/router";
import {Phieu} from "../phieu";
import {VanChuyen} from "../van-chuyen";
import {DoiTac} from "../doi-tac";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phieus: Phieu[];
  vanchuyens: VanChuyen[];
  doitacs: DoiTac[];
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;

  users: Phieu[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: BillService,
              private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(): void {
    if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
  }

  filterUserList(filters: any, users: any): void {
    this.filteredUsers = this.users;     //Reset User List

    const keys = Object.keys(filters);
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    this.filteredUsers = this.users.filter(filterUser);

    this.ref.detectChanges();
  }

  loadUsers(): void {
    this.userService.findAllPh()
      .subscribe(users => this.users = users);

    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
  }

}
