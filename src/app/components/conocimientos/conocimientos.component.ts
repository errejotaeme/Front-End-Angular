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

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('conocimientos').subscribe(data => {
      this.conocimientosLista=data;
    });
  }

  agregarRegistro(){}

}
