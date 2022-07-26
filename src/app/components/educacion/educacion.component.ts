import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  educacionLista:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educacionLista=data.educacion;
    });
  }

  editar(){
    console.log("Abro modal de edicion")
  }


}
