import {ResortService} from "./resort-service";

export class Villa extends ResortService{
  standRoom:string;
  description:string;
  areaPool:string;
  numberFloor:number;


  constructor() {
    super();
  }
}
