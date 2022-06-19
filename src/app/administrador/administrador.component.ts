import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  data: Data[] = [];
  showStudents: boolean = true;
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { 
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3)]],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]]
    })
  }

  ngOnInit(): void {  }

  registrarAlumno(){
    console.log(this.form);
    const ALUMNOS: Data = {
      codigo: this.form.value.codigo,
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      dni: this.form.value.dni,
      celular: this.form.value.celular,
    }
    console.log(ALUMNOS, 'imprime la tabla')
  }

  loadList(){
    console.log('load');
    this.data = JSON.parse(this.userService.getStudents() || '{}');
    if (this.data !== null) {
      this.showStudents == true;
    }
    else {
      this.showStudents == false;
    }
  }
}
