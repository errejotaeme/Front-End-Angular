import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia:any=[];

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

  transmitirEdicion(cambios:Experiencia){
    this.actualizarDatos.emit(cambios)
  }

  transmitirObjeto(borrar:Experiencia){
    this.borrarDatos.emit(borrar)
  }

}
