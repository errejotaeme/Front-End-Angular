import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edicion',
  templateUrl: './modal-edicion.component.html',
  styleUrls: ['./modal-edicion.component.css']
})

export class ModalEdicionComponent implements OnInit {
  @Input() objetoEdicion: { [key: string]: string} = {};

  @Output() cerrar = new EventEmitter();
  @Output() editarRegistro = new EventEmitter();

  registroEditado: { [key: string]: string } = {};

  constructor() { }

  ngOnInit(): void {
  }


  cerrarModal() {
    this.cerrar.emit();
  }

  guardarEdicion() {
    if (this.registroEditado['id'] !== this.objetoEdicion['id']) {
      alert("No modificar el número de ID. Se debe reingresar el valor existente.");
      return
    }
    const cambios = this.registroEditado;
    this.editarRegistro.emit(cambios);
    alert("Se han editado los datos. Actualice el navegador para ver los cambios.")
    this.cerrarModal();
  }

}
