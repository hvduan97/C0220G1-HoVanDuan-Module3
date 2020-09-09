import { Injectable } from '@angular/core';
import {Dictionary} from "./dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList = [
    new Dictionary('hello','xin chào'),
    new Dictionary('bye','tạm biệt'),
    new Dictionary('book','quyển sách'),
    new Dictionary('pen','cây bút')
  ]
  constructor() { }
  findByKey(key:string):Dictionary{
    return this.dictionaryList.find(dictionary => dictionary.key===key);
  }

}
