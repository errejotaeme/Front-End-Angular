import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { Conocimiento } from 'src/app/interfaces/conocimiento';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-modal-edicion',
  templateUrl: './modal-edicion.component.html',
  styleUrls: ['./modal-edicion.component.css']
})
export class ModalEdicionComponent implements OnInit {
  @Input() listaEdicion:(Educacion | Conocimiento | Experiencia | Persona)[]= [];
  @Output() cerrar = new EventEmitter();

  contenido:any;

  constructor() { }

  ngOnInit(): void {
    this.contenido = this.listaEdicion
  }


  guardarEdicion(){
    this.cerrarModal();
    console.log(this.listaEdicion)
  }

  cerrarModal(){
    this.cerrar.emit();
  }

}
