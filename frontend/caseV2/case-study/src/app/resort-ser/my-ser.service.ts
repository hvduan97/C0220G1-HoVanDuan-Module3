import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Villa} from "./villa";
import {House} from "./house";
import {Room} from "./room";
import {TypeRent} from "./type-rent";

@Injectable({
  providedIn: 'root'
})
export class MySerService {

  API_URL_HOUSE = 'http://localhost:3000/house';
  API_URL_ROOM = 'http://localhost:3000/room';
  API_URL_VILLA = 'http://localhost:3000/villa';
  URL_TYPE_RENT = 'http://localhost:3000/type-rent';
  constructor(private httpClient: HttpClient) { }

  findAllVilla(): Observable<Villa[]> {
    return this.httpClient.get<Villa[]>(this.API_URL_VILLA);
  }
  findAllHouse(): Observable<House[]> {
    return this.httpClient.get<House[]>(this.API_URL_HOUSE);
  }
  findAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.API_URL_ROOM);
  }

  findAllType(): Observable<TypeRent[]> {
    return this.httpClient.get<TypeRent[]>(this.URL_TYPE_RENT);
  }

  findByIdVilla(id: number): Observable<Villa> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<Villa>(this.API_URL_VILLA + '/' + id);
  }
  findByIdHouse(id: number): Observable<House> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<House>(this.API_URL_HOUSE + '/' + id);
  }
  findByIdRoom(id: number): Observable<Room> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<Room>(this.API_URL_ROOM + '/' + id);
  }

  createVilla(customer: Partial<Villa>): Observable<Villa> {
    return this.httpClient.post<Villa>(this.API_URL_VILLA, customer);
  }
  createHouse(customer: Partial<House>): Observable<House> {
    return this.httpClient.post<House>(this.API_URL_HOUSE, customer);
  }
  createRoom(customer: Partial<Room>): Observable<Room> {
    return this.httpClient.post<Room>(this.API_URL_ROOM, customer);
  }

  deleteByIdVilla(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_VILLA + '/' + id);
  }
  deleteByIdHouse(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_HOUSE + '/' + id);
  }
  deleteByIdRoom(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_ROOM + '/' + id);
  }

  updateVilla(post: Villa): Observable<Villa> {
    return this.httpClient.put<Villa>(`${this.API_URL_VILLA}/${post.id}`, post);
  }
  updateHouse(post: House): Observable<House> {
    return this.httpClient.put<House>(`${this.API_URL_HOUSE}/${post.id}`, post);
  }
  updateRoom(post: Room): Observable<Room> {
    return this.httpClient.put<Room>(`${this.API_URL_ROOM}/${post.id}`, post);
  }
}
