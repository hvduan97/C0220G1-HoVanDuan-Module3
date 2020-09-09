import { Component, OnInit } from '@angular/core';
import {Dictionary} from "./dictionary";
import {DictionaryService} from "./dictionary.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  keyword='';
  result='';
  // result=this.check();
  dictionaryList: Dictionary[];
  constructor(private dictionaryService:DictionaryService,
              private router:Router) { }
  check(){
    for (let abc of this.dictionaryService.dictionaryList){
      if (this.keyword === abc.key){
        this.result = abc.key+' nghĩa là '+abc.word;
        break;
      }
      else {
        this.result = 'Không tìm thấy';
      }
    }

  }
  ngOnInit(): void {
    this.dictionaryList=this.dictionaryService.dictionaryList;
  }

}
