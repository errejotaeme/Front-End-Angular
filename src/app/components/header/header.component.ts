import { Component, OnInit, Renderer2 } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/interfaces/persona';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datosPersona:Persona[] = [];

  tema: boolean = false;
  clase: string = "";
  cambiar:string = "fas fa-moon";

  tituloSesion :string = "";
  iconoSesion : string = "";

  constructor(
    private renderer: Renderer2,
    private datosPortfolio: PortfolioService,
    private ruta:Router,
    private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('persona').subscribe(data => {
      this.datosPersona=data;
    });

    this.manejoSesion();
  }

  manejoSesion(){
    let currentUser = this.autenticacion.usuarioAutenticado;
    if(currentUser && currentUser.accesToken) {
      this.tituloSesion = "Cerrar sesión";
      this.iconoSesion = "fas fa-sign-out-alt";
    } else {
      this.tituloSesion = "Iniciar sesión";
      this.iconoSesion = "fas fa-sign-in-alt";
    }}

  sesion(){
    let currentUser = this.autenticacion.usuarioAutenticado;
    if(currentUser && currentUser.accesToken) {
      this.cerrarSesion();
    } else {
      this.iniciarSesion();
    }
  }


  alternarTemaColor(){
     if(this.tema == false){
    this.renderer.addClass(document.body, 'tema-oscuro');
    this.clase = "img-invertida";
    this.cambiar="fas fa-sun";
     }else{
      this.renderer.removeClass(document.body, 'tema-oscuro');
      this.clase = "";
      this.cambiar= "fas fa-moon"
     }
    this.tema = !this.tema;
    }

  mostrarCorreo(){
    alert(this.datosPersona[0].email)
  }


  iniciarSesion(){
    this.ruta.navigate(['/iniciar-sesion']);
  }

  cerrarSesion(){
    alert("Se ha cerrado la sesión. Para acceder al portfolio debe autenticarse.")
    sessionStorage.clear();
    location.reload();
    this.ruta.navigate(['/portfolio']);
  }

}
