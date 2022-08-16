import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  formulario:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private autenticacionService:AutenticacionService,
    private ruta:Router) {
      this.formulario = this.formBuilder.group(
        {
          usuario : ['', [Validators.required]],
          clave: ['', [Validators.required, Validators.minLength(8)]]
        }
      );
  }

  ngOnInit(): void {
  }

  get Usuario(){
    return this.formulario.get('usuario');
  }

  get Clave(){
    return this.formulario.get('clave');
  }

  enviar(event:Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.formulario.value).subscribe(data=>{
      this.ruta.navigate(['/portfolio']);
    })
  }
}
