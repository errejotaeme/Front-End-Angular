import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from 'src/app/interfaces/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista:Experiencia[]=[];

  logeado:boolean=true; //traigo desde otro servicio
  agregarItem:boolean = false;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('experiencias').subscribe(data => {
      this.experienciaLista=data;
    });
  }

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
  }

  actualizar(cambios:Experiencia){
    this.datosPortfolio.actualizarDatos(cambios, "experiencias").subscribe()
  }

  alta(registro:Experiencia){
    this.datosPortfolio.agregarRegistro(registro, "experiencias").subscribe(registro => {
      this.experienciaLista.push(registro);
    });
  }

  eliminar(borrar:Experiencia){
    this.datosPortfolio.borrarDatos(borrar, "experiencias").subscribe()
  }

}
