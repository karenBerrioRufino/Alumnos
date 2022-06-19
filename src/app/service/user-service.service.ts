import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


  getStudents(){
      return localStorage.getItem('getStudents');
  }
}
