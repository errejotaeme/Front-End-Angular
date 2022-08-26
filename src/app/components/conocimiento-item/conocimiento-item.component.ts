import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conocimiento } from 'src/app/interfaces/conocimiento';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-conocimiento-item',
  templateUrl: './conocimiento-item.component.html',
  styleUrls: ['./conocimiento-item.component.css']
})
export class ConocimientoItemComponent implements OnInit {

  @Input() conocimiento:any;

  @Output() borrarDatos = new EventEmitter();

  editarItem:boolean = false;
  eliminarItem:boolean = false;
  progreso: number = 0;
  logeado:boolean = false;

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.progreso = Number(this.conocimiento.progreso);
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

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

  modalEliminar(){
    this.eliminarItem = !this.eliminarItem;
  }

  transmitirObjeto(borrar:Conocimiento){
    this.borrarDatos.emit(borrar)
  }

}
