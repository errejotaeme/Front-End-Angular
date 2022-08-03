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
    if (isNaN(+this.registroEditado['progreso']) == true) {
      alert("Se debe ingresar un número entero que represente el progreso.");
      return
    }
    if (Number(this.registroEditado['progreso']) < 0 || Number(this.registroEditado['progreso']) > 100 == true) {
      alert("El numero ingresado que representa el progreso debe ser un entero entre 0 y 100.");
      return
    }
    let x:number = Math.round(Number(this.registroEditado['progreso']));
    this.registroEditado['progreso'] = x.toString()


    const cambios = this.registroEditado;
    this.editarRegistro.emit(cambios);
    alert("Se han editado los datos. Actualice el navegador para ver correctamente los cambios.")
    this.cerrarModal();
  }

}
