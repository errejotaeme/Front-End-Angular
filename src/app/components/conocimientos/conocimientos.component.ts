import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Conocimiento } from 'src/app/interfaces/conocimiento';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  conocimientosLista:Conocimiento[] = [];

  agregarItem:boolean = false;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('conocimientos').subscribe(data => {
      this.conocimientosLista=data;
    });
  }

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
  }

  alta(registro:Conocimiento){
    this.datosPortfolio.agregarRegistro(registro, "conocimientos").subscribe(registro => {
      this.conocimientosLista.push(registro);
    });
  }

  eliminar(borrar:Conocimiento){
    this.datosPortfolio.borrarDatos(borrar, "conocimientos").subscribe()
  }

}
