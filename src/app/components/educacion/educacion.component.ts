import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/interfaces/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista:Educacion[] = [];

  agregarItem:boolean = false;
  logeado:boolean=false;

  constructor(private datosPortfolio: PortfolioService,
    private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos('educacion').subscribe(data => {
      this.educacionLista=data;
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

  eliminar(borrar:Educacion){
    this.datosPortfolio.borrarDatos(borrar, "educacion").subscribe(Response =>{
      alert(Response);
      location.reload();
    });
  }

}
