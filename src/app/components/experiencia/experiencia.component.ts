import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista:Experiencia[]=[];

  agregarItem:boolean = false;
  logeado:boolean = false;

  constructor(private datosPortfolio: PortfolioService,
    private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('experiencias').subscribe(data => {
      this.experienciaLista=data;
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

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
  }

  eliminar(borrar:Experiencia){
    this.datosPortfolio.borrarDatos(borrar, "experiencias").subscribe(Response =>{
      alert(Response);
      location.reload();
    });
  }

}
