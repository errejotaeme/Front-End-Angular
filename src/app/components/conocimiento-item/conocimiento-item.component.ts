import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conocimiento } from 'src/app/interfaces/conocimiento';

@Component({
  selector: 'app-conocimiento-item',
  templateUrl: './conocimiento-item.component.html',
  styleUrls: ['./conocimiento-item.component.css']
})
export class ConocimientoItemComponent implements OnInit {

  @Input() conocimiento:any;
  @Output() actualizarDatos = new EventEmitter();
  @Output() borrarDatos = new EventEmitter();

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;
  editarItem:boolean = false;
  eliminarItem:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

  modalEliminar(){
    this.eliminarItem = !this.eliminarItem;
  }

  transmitirEdicion(cambios:Conocimiento){
    this.actualizarDatos.emit(cambios)
  }

  transmitirObjeto(borrar:Conocimiento){
    this.borrarDatos.emit(borrar)
  }


}
