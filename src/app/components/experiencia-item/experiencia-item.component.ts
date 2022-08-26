import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


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
  logeado:boolean = false;

  constructor(private autenticacion: AutenticacionService) { }

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

  transmitirObjeto(borrar:Experiencia){
    this.borrarDatos.emit(borrar)
  }

}
