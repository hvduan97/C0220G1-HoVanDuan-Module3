import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) {
  }

  ngOnInit(): void {
    // const {snapshot} = this.activatedRoute;
    // const id = Number(snapshot.paramMap.get('id'));
    // this.student = this.studentService.findById(id);

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      this.studentService.findById(id).subscribe(
        next => this.student = next,
        error => console.log(error)
      );
    });
  }

}
