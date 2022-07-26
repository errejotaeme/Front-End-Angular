import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;
  miPortfolio:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
    });
  }

  editar(){
    console.log("Abro modal de edicion")
  }

}
