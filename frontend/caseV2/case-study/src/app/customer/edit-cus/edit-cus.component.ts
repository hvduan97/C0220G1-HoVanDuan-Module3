import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../customer";
import {Typecustomer} from "../typecustomer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-edit-cus',
  templateUrl: './edit-cus.component.html',
  styleUrls: ['./edit-cus.component.scss']
})
export class EditCusComponent implements OnInit {

  customer: Customer;
  customerForm: FormGroup;
  typecustomers: Typecustomer[];
  constructor(
    private route: ActivatedRoute,
    private serviceCusService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: [''],
      code: [''],
      name: ['',Validators.required],
      dateOfBirth: ['',[Validators.required]],
      idCard: ['',[Validators.required, Validators.pattern(/^([0-9]{9})$/)]],
      phone: ['',[Validators.required, Validators.pattern(/^(090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7})$/)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: ['',Validators.required],
      typeCus: ['',Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceCusService.findById(id).subscribe(
      next => {
        this.customer = next;
        this.customerForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );

    this.serviceCusService.findAllType().subscribe(
      next => this.typecustomers = next,
      error => {
        this.typecustomers = [];
        console.log(error);
      });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const { value } = this.customerForm;
      const data = {
        ...this.customer,
        ...value
      };
      this.serviceCusService.updateCus(data).subscribe(
        next => {
          this.router.navigate(['/list-cus']);
        },
        error => console.log(error)
      );
    }
  }

}
