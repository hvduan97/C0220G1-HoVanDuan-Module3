import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../dictionary";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  constructor(private activatedRoute:ActivatedRoute,
              private dictionaryService:DictionaryService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      const key=param.get('key');
      this.dictionary=this.dictionaryService.findByKey(key);
    })
  }

}
