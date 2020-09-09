import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentService {

  API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  findById(id: number): Observable<Student> {
    // return this.httpClient.get<Student>(`${this.API_URL}/${id}`);
    return this.httpClient.get<Student>(this.API_URL + '/' + id);
  }

  create(student: Partial<Student>): Observable<Student> {
    return this.httpClient.post<Student>(this.API_URL, student);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}
