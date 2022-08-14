import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {
  @Input() objetoAEliminar: { [key: string]: string} = {};

  @Output() cerrar = new EventEmitter();
  @Output() eliminarRegistro = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  eliminarObjeto() {
    const borrar = this.objetoAEliminar;
    this.eliminarRegistro.emit(borrar);
    this.cerrarModal();
  }

}
