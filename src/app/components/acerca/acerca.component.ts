import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/interfaces/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  datosPersona:Persona[] = [];
  editarItem:boolean = false;

  logeado:boolean = false;

  constructor(
    private datosPortfolio: PortfolioService,
    private autenticacion: AutenticacionService) {
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('persona').subscribe(data => {
      this.datosPersona=data;
    });
    this.manejoSesion();
  }

  manejoSesion(){
    let currentUser = this.autenticacion.usuarioAutenticado;
      if(currentUser && currentUser.accesToken) {
        this.logeado = true;
      } else {
        this.logeado = false;
      }
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

}
