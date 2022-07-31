import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal-edicion',
  templateUrl: './modal-edicion.component.html',
  styleUrls: ['./modal-edicion.component.css']
})
export class ModalEdicionComponent implements OnInit {
  @Input() objetoEdicion:{ [key: string]: any[] } = {};
  @Output() cerrar = new EventEmitter();
  @Output() editarRegistro = new EventEmitter();

  registroEditado:{ [key: string]: any[] } = this.objetoEdicion;

  constructor() { }

  ngOnInit(): void {
  }

  guardarEdicion(){
    const cambios = this.registroEditado;
    this.editarRegistro.emit(cambios);
    this.cerrarModal();
    console.log(cambios);
  }

  cerrarModal(){
    this.cerrar.emit();
  }

}
