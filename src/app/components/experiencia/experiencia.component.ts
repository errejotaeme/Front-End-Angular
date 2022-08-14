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

  eliminar(borrar:Experiencia){
    this.datosPortfolio.borrarDatos(borrar, "experiencias").subscribe(Response =>{
      alert(Response);
      location.reload();
    });
  }

}
