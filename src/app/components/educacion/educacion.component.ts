import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/interfaces/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista:Educacion[] = [];

  logeado:boolean=true; //traigo desde otro servicio
  agregarItem:boolean = false; //switch modal

  constructor(
    private datosPortfolio: PortfolioService,
    ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('educacion').subscribe(data => {
      this.educacionLista=data;
    });
  }

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
  }

  actualizar(cambios:Educacion){
    this.datosPortfolio.actualizarDatos(cambios, "educacion").subscribe()
  }

  alta(registro:Educacion){
    this.datosPortfolio.agregarRegistro(registro, "educacion").subscribe(registro => {
      this.educacionLista.push(registro);
    });
  }

  eliminar(borrar:Educacion){
    this.datosPortfolio.borrarDatos(borrar, "educacion").subscribe()
  }

}
