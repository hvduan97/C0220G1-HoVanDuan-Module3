import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Phieu} from "../quanlyphieu/phieu";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL_USER = 'http://localhost:3000/user';
  constructor(private httpClient: HttpClient) { }
  findAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL_USER);
  }
}
