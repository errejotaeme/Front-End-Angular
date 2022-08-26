import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


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
  logeado:boolean=false;

  constructor(private autenticacion: AutenticacionService) {
   }

  ngOnInit(): void {
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

  transmitirObjeto(borrar:Educacion){
    this.borrarDatos.emit(borrar)
  }


}
