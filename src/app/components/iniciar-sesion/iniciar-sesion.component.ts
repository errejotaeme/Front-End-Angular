import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formulario = this.fb.group(
      {
        usuario : ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {
  }

  get Usuario(){
    return this.formulario.get('usuario');
  }

  get Password(){
    return this.formulario.get('password');
  }


}
