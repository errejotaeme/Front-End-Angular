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
          password: ['', [Validators.required, Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
            deviceId: ["123456"],
            deviceType: ["ANDROID"],
            notificationToken:["987dddd789"]
          })
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

  enviar(event:Event){
    event.preventDefault;  //cancela el curso normal del submit
    this.autenticacionService.iniciarSesion(this.formulario.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }
}
