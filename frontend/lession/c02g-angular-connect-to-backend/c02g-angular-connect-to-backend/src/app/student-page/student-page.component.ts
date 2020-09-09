import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
  providers: [StudentService]
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    // this.studentList = this.studentService.studentList;
    this.studentService.findAll().subscribe(
      next => this.studentList = next,
      error => {
        this.studentList = [];
        console.log(error);
      });
  }

  deleteById(id: number): void {
    this.studentService.deleteById(id).subscribe(
      next => this.studentList = this.studentList.filter(student => student.id !== id),
      error => console.log(error)
    );
  }
}
