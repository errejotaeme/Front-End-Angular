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

  agregarItem:boolean = false;

  constructor(
    private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('educacion').subscribe(data => {
      this.educacionLista=data;
    });
  }

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
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
