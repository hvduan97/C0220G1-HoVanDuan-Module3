import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeRent} from "../type-rent";
import {MySerService} from "../my-ser.service";

@Component({
  selector: 'app-create-ser',
  templateUrl: './create-ser.component.html',
  styleUrls: ['./create-ser.component.scss']
})
export class CreateSerComponent implements OnInit {

  serForm: FormGroup;
  typeRents: TypeRent[];
  typeService;
  constructor(private formBuilder: FormBuilder,
              private mySerService: MySerService) { }
  ngOnInit(): void {
    this.serForm = this.formBuilder.group({
      id: [''],
      name: ['',[Validators.required]],
      area:['',[Validators.required]],
      rentCost:['',[Validators.required]],
      maxPeople:['',[Validators.required]],
      rentType:['',[Validators.required]],
      typeService:['',[Validators.required]],
      standRoom:['',[Validators.required]],
      description:['',[Validators.required]],
      areaPool:['',[Validators.required]],
      numberFloor:['',[Validators.required]],
      freeService:['',[Validators.required]]
    });

    this.mySerService.findAllType().subscribe(
      next => this.typeRents = next,
      error => {
        this.typeRents = [];
        console.log(error);
      });
  }
  onSubmit() {
    if (this.serForm.value.typeService === 'Room') {
      this.mySerService.createRoom(this.serForm.value).subscribe(
        next => window.location.reload(),
        error => console.log(error)
      );
    } else if (this.serForm.value.typeService === 'House') {
      this.mySerService.createHouse(this.serForm.value).subscribe(
        next => window.location.reload(),
        error => console.log(error)
      );
    } else {
      this.mySerService.createVilla(this.serForm.value).subscribe(
        next => window.location.reload(),
        error => console.log(error)
      );
    }
  }
  getType() {
    this.typeService = this.serForm.value.typeService;
    console.log(this.typeService);
  }


}
