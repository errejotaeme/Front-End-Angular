import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia:any=[];

  @Output() borrarDatos = new EventEmitter();

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

  transmitirObjeto(borrar:Experiencia){
    this.borrarDatos.emit(borrar)
  }

}
