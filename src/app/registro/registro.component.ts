import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Data } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  data: Data[] = [];
  
  
  /* codigo!:string;
  nombres!: string;
  apellidoPaterno!:string;
  apellidoMaterno!: string; 
  dni!: string;
  celular!: string;*/

  @Output() addStudent = new EventEmitter<String>();
  registroAlumno = new FormGroup({
    codigo: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    nombres: new FormControl ('', Validators.required),
    apellidoPaterno: new FormControl ('', Validators.required),
    apellidoMaterno: new FormControl ('', Validators.required),
    dni: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]),
    celular: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')])
  })

  constructor(private fb: FormBuilder) {
   /* this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3)]],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]]
    }) */
    
   }

   

  ngOnInit(): void {  }

  registrarAlumno(value: string){
    /*this.addStudent.emit({
      codigo: this.codigo,
      nombres: this.nombres,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      dni: this.dni,
      celular: this.celular, 

    }
    );*/
    let getStudents = JSON.parse(localStorage.getItem('registro')  || '{}')
    let form = [];
    form = getStudents;
    form.push(this.registroAlumno.value);
    localStorage.setItem('registro', JSON.stringify(form));
    localStorage.getItem('registro');
    this.addStudent.emit(value);
    /*console.log(this.form.value);
    const ALUMNOS: Data = {
      codigo: this.form.value.codigo,
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      dni: this.form.value.dni,
      celular: this.form.value.celular,
      
    }
    console.log(ALUMNOS, 'imprime la tabla')*/

  }
}
