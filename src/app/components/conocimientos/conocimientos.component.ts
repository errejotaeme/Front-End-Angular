import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Conocimiento } from 'src/app/interfaces/conocimiento';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  conocimientosLista:Conocimiento[] = [];

  agregarItem:boolean = false;
  logeado:boolean = false;

  constructor(private datosPortfolio: PortfolioService,
    private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('conocimientos').subscribe(data => {
      this.conocimientosLista=data;
    });

    this.manejoSesion();
  }

  manejoSesion(){
    let currentUser = this.autenticacion.usuarioAutenticado;
      if(currentUser && currentUser.accesToken) {
        this.logeado = true;
      } else {
        this.logeado = false;
      }
  }

  modalAgregar(){
    this.agregarItem = !this.agregarItem;
  }

  eliminar(borrar:Conocimiento){
    this.datosPortfolio.borrarDatos(borrar, "conocimientos").subscribe(Response =>{
      alert(Response);
      location.reload();
    });
  }

}
