import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conocimiento } from 'src/app/interfaces/conocimiento';

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

  constructor() { }

  ngOnInit(): void {
    this.progreso = Number(this.conocimiento.progreso);
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
