import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Typecustomer} from "../typecustomer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-create-cus',
  templateUrl: './create-cus.component.html',
  styleUrls: ['./create-cus.component.scss']
})
export class CreateCusComponent implements OnInit {

  customerForm: FormGroup;
  typecustomers: Typecustomer[];
  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      id: [''],
      code: [''],
      name: ['',[Validators.required, Validators.pattern(/^([A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)((\s[A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*)$/)]],
      dateOfBirth: ['',[Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{3}\-+[0-9]{2}\-+[0-9]{2}$/)]],
      idCard: ['',[Validators.required, Validators.pattern(/^(([0-9]{9})|([0-9]{12}))$/)]],
      phone: ['',[Validators.required, Validators.pattern(/^(090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7})$/)]],
      email: ['',[Validators.required, Validators.email]],
      address: ['',[Validators.required,Validators.pattern(/^(([A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềếểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)(\s[A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặếẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*)(,\s(([A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏếốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)(\s[A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-z_àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻếẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*))*$/)]],
      typeCus: ['',Validators.required]
    });

    this.customerService.findAllType().subscribe(
      next => this.typecustomers = next,
      error => {
        this.typecustomers = [];
        console.log(error);
      });
  }

  // checkDate() {
  //   const dateSendingToServer = new DatePipe('en-US').transform(this.customerForm.get('dateOfBirth'), 'dd/MM/yyyy')
  //   console.log(dateSendingToServer);
  // }

  onSubmit(): void {
    this.customerForm.patchValue({
      code: 'KH-' + (Math.floor(Math.random() * 8999) + 1000)
    });

    this.customerService.create(this.customerForm.value).subscribe(
      next => window.location.reload(),
      error => console.log(error)
    );
  }

}
