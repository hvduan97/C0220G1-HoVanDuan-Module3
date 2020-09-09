import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  // form = new FormGroup({
  //   cities: new FormArray([]),
  // });
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // get cities(): FormArray {
  //   return this.form.get('cities') as FormArray;
  // }
  //
  // addCity() {
  //   this.cities.push(new FormControl());
  // }
  //
  // onSubmit() {
  //   console.log(this.cities.value);  // ['SF', 'NY']
  //   console.log(this.form.value);    // { cities: ['SF', 'NY'] }
  // }
  //
  // setPreset() {
  //   this.cities.patchValue(['LA', 'MTV']);
  // }
  // // public invoiceForm: FormGroup;
  // // constructor(private fb: FormBuilder) {}
  // // ngOnInit() {
  // //   this.invoiceForm = this.fb.group({
  // //     Rows: this.fb.array([this.initRows()])
  // //   });
  // // }
  // //
  // // get formArr() {
  // //   return this.invoiceForm.get('Rows') as FormArray;
  // // }
  // //
  // // initRows() {
  // //   return this.fb.group({
  // //     name: ['']
  // //   });
  // // }
  // //
  // // addNewRow() {
  // //   this.formArr.push(this.initRows());
  // // }
  // //
  // // deleteRow(index: number) {
  // //   this.formArr.removeAt(index);
  // // }

  ngForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.ngForm = this.fb.group({
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', []],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

}
