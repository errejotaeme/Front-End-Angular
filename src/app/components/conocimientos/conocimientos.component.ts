import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  conocimientosLista:any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.conocimientosLista=data.conocimientos;
    });
  }

  editar(){
    console.log("Abro modal de edicion")
  }

}
