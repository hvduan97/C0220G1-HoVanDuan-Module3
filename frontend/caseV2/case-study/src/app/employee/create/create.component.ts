import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Position} from "../position";
import {Level} from "../level";
import {Part} from "../part";
import {ServiceEmployeeService} from "../service-employee.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  employeeForm: FormGroup;
  positions: Position[];
  levels: Level[];
  parts: Part[];
  employee: Employee;

  constructor(private formBuilder: FormBuilder,
              private serviceEmployeeService: ServiceEmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      code:[''],
      name: ['',[Validators.required, Validators.pattern(/^([A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)((\s[A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*)$/)]],
      dateOfBirth: ['',[Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{3}\-+[0-9]{2}\-+[0-9]{2}$/)]],
      idCard: ['',[Validators.required, Validators.pattern(/^(([0-9]{9})|([0-9]{12}))$/)]],
      phone: ['',[Validators.required, Validators.pattern(/^(090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7})$/)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: ['',Validators.required],
      salary: ['',Validators.required],
      position: ['',Validators.required],
      level: ['',Validators.required],
      part: ['',Validators.required],
    });

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

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const { value } = this.employeeForm;
      const data = {
        ...this.employee,
        ...value
      };
      const fieldsToCheck = [
        'name',
        'dateOfBirth',
        'idCard'
      ];
      this.employeeForm.patchValue({
        code: 'NV-' + (Math.floor(Math.random() * 8999) + 1000)
      });
      this.serviceEmployeeService.create(data).subscribe(
        next => window.location.reload(),
        error => console.log(error)
      );
      for (let i = 0; i < fieldsToCheck.length; i ++) {
        const fieldName = fieldsToCheck[i];
        if (this.employeeForm.get(fieldName).invalid) {
          (<any>this.employeeForm.get(fieldName)).nativeElement.focus();
          break;
        }
      }
    }
  }

}
