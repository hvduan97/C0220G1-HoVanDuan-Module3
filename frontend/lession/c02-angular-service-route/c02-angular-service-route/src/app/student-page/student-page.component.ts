import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentList = this.studentService.studentList;
  }

  goDetail(id: number): void {
    this.router.navigate(['student-detail', id]);
  }
}
