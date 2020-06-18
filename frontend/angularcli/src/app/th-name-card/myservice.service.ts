import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  cardNameService: string;
  emailService: string;
  phoneService: string;
  constructor() { }
}
