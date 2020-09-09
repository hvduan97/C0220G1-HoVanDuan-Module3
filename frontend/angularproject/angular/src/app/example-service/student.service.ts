import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [
    new Student(1,'Duan','97'),
    new Student(2,'Ha','88'),
    new Student(3,'Hai','96')
  ];
  constructor() { }
  findById(id: number): Student{
    return this.studentList.find(student => student.id===id);
  }
}
