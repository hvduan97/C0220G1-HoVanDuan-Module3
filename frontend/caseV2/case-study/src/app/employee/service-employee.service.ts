import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {Position} from "./position";
import {Level} from "./level";
import {Part} from "./part";

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
  API_URL = 'http://localhost:3000/employee';
  API_URL_POSITION = 'http://localhost:3000/position';
  API_URL_LEVEL = 'http://localhost:3000/level';
  API_URL_PART = 'http://localhost:3000/part';

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL);
  }
  findById(id: number): Observable<Employee> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }
  create(employee: Partial<Employee>): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_URL, employee);
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  updateCus(post: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.API_URL}/${post.id}`, post);
  }
  findAllPositon(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.API_URL_POSITION);
  }
  findAllLevel(): Observable<Level[]> {
    return this.httpClient.get<Level[]>(this.API_URL_LEVEL);
  }
  findAllPart(): Observable<Part[]> {
    return this.httpClient.get<Part[]>(this.API_URL_PART);
  }
}
