import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  experienciaLista:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaLista=data.experiencias;
    });
  }

  editar(){
    console.log("Abro modal de edicion")
  }

}
