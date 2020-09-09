import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;


  constructor(private fb: FormBuilder) {
    // this.formSignUp = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   subject: new FormGroup({
    //     nodeJS: new FormControl(),
    //     angular: new FormControl(),
    //     reactJS: new FormControl()
    //   })
    //
    // });

  }
  onSubmit(){
    console.log(this.formSignUp.value)
  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.required, gmailValidator]],
      password: '',
      subject: this.fb.group({
        nodeJS: false,
        angular: false,
        reactJS: false
      })
    })
  }

}
function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true};
}
