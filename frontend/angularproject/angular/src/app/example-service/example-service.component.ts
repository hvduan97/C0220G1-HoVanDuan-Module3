import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-example-service',
  templateUrl: './example-service.component.html',
  styleUrls: ['./example-service.component.scss']
})
export class ExampleServiceComponent implements OnInit {
  studentList: Student[];
  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(): void {
    this.studentList = this.studentService.studentList;
  }

}
