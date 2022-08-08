import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  @Input() educacion:any;

  @Output() borrarDatos = new EventEmitter();

  editarItem:boolean = false;
  eliminarItem:boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

  modalEliminar(){
    this.eliminarItem = !this.eliminarItem;
  }

  transmitirObjeto(borrar:Educacion){
    this.borrarDatos.emit(borrar)
  }


}
