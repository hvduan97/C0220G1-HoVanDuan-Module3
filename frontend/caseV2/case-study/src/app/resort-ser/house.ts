import {ResortService} from "./resort-service";

export class House extends ResortService{
  standRoom:string;
  description:string;
  numberFloor:number;

  constructor() {
    super();
  }
}
