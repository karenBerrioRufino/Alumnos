import { Injectable } from '@angular/core';
import { Data } from '../administrador/table/data';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  data: Data[];

  constructor() { 
    this.data = []
  }

  /*getStudents(){
     
        this.data = JSON.parse(localStorage.getItem('data') || '{}');
  
  }

  setStudents(data: Data): void{
    localStorage.setItem('data', JSON.stringify(data));
  }*/
}
