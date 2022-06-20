import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Data } from './table/data';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  data: Data[] = [];
  allData: any = [];
  //showStudents: boolean = true;
  
  // @Input('student') alumno!: Data;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void { 
   // this.data = this.userService.getStudents();
   }

  /*studentAdded(student: Data | any){
    this.userService.setStudents(student);
  }*/ 
  loadList(){
    /* console.log('load');
    this.data = JSON.parse(this.userService.getStudents() || '{}');
    if (this.data !== null) {
      this.showStudents == true;
    }
    else {
      this.showStudents == false;
    }*/
    this.data = JSON.parse(localStorage.getItem('registro') || '{}');
  }
  
}

