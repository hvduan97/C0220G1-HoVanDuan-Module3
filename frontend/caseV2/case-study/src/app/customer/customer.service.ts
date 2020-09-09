import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./customer";
import {Typecustomer} from "./typecustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API_URL = 'http://localhost:3000/customerList';
  URL2 = 'http://localhost:3000/typeCustomer';
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  findAllType(): Observable<Typecustomer[]> {
    return this.httpClient.get<Typecustomer[]>(this.URL2);
  }

  findById(id: number): Observable<Customer> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  create(customer: Partial<Customer>): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  updateCus(post: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.API_URL}/${post.id}`, post);
  }
}
