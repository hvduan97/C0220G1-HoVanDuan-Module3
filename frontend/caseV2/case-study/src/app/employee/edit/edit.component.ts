import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Position} from "../position";
import {Level} from "../level";
import {Part} from "../part";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceEmployeeService} from "../service-employee.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  employee: Employee;
  employeeForm: FormGroup;
  positions: Position[];
  levels: Level[];
  parts: Part[];
  constructor(
    private route: ActivatedRoute,
    private serviceEmployeeService: ServiceEmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: [''],
      code:[''],
      salary: ['',Validators.required],
      name: ['',Validators.required],
      dateOfBirth: ['',[Validators.required]],
      idCard: ['',[Validators.required, Validators.pattern(/^([0-9]{9})$/)]],
      phone: ['',[Validators.required, Validators.pattern(/^(090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7})$/)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: ['',Validators.required],
      position: ['',Validators.required],
      level: ['',Validators.required],
      part: ['',Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceEmployeeService.findById(id).subscribe(
      next => {
        this.employee = next;
        this.employeeForm.patchValue(this.employee);
      },
      error => {
        console.log(error);
        this.employee = null;
      }
    );

    this.serviceEmployeeService.findAllPositon().subscribe(
      next => this.positions = next,
      error => {
        this.positions = [];
        console.log(error);
      });
    this.serviceEmployeeService.findAllLevel().subscribe(
      next => this.levels = next,
      error => {
        this.levels = [];
        console.log(error);
      });
    this.serviceEmployeeService.findAllPart().subscribe(
      next => this.parts = next,
      error => {
        this.parts = [];
        console.log(error);
      });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const { value } = this.employeeForm;
      const data = {
        ...this.employee,
        ...value
      };
      this.serviceEmployeeService.updateCus(data).subscribe(
        next => {
          this.router.navigate(['/list-employee']);
        },
        error => console.log(error)
      );
    }
  }

}
