import { Component, OnInit, Renderer2 } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/interfaces/persona';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datosPersona:Persona[] = [];

  tema: boolean = false;
  clase: string = "";
  cambiar:string = "fas fa-moon"

  constructor(
    private renderer: Renderer2,
    private datosPortfolio: PortfolioService,
    private ruta:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('persona').subscribe(data => {
      this.datosPersona=data;
    });
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

  cerrarSesion(){
    alert("Se ha cerrado la sesión. Para acceder al portfolio debe autenticarse.")
    sessionStorage.clear();
    location.reload();
    this.ruta.navigate(['/iniciar-sesion']);
  }

}
