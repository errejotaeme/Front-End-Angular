import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  datosPersona:Persona[] = [];
  editarItem:boolean = false;

  constructor(private datosPortfolio: PortfolioService) {
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('persona').subscribe(data => {
      this.datosPersona=data;
    });
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

}
