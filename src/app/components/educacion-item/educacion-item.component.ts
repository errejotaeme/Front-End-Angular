import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  @Input() educacion:any;
  @Output() actualizarDatos = new EventEmitter();

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  editarItem:boolean = false;

  constructor() {

   }

  ngOnInit(): void {
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

  transmitirEdicion(cambios:Educacion){
    this.actualizarDatos.emit(cambios)
  }

}
