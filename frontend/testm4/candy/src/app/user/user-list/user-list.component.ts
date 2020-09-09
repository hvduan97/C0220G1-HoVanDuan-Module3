import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;

  users: User[] = [];
  filteredUsers: any[] = [];
  key: string = 'name'; //set default
  reverse: boolean = false;
  myForm: FormGroup;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private userService: UserService,
              private ref: ChangeDetectorRef,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadUsers();
    this.myForm=this.fb.group({});
  }

  ngOnChanges(): void {
    if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
  }

  filterUserList(filters: any, users: User[]): void {
    this.filteredUsers = this.users;     //Reset User List

    const keys = Object.keys(filters);
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    this.filteredUsers = this.users.filter(filterUser);

    this.ref.detectChanges();
  }

  loadUsers(): void {
    this.userService.findAllUser()
      .subscribe(users => this.users = users);

    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
  }

}
