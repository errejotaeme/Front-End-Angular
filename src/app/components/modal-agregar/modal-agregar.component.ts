import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent implements OnInit {
  @Input() coleccionObjetos: any[] = [];

  @Output() cerrar = new EventEmitter();
  @Output() altaRegistro = new EventEmitter();

  objeto: { [key: string]: string } = {};
  nuevoRegistro: { [key: string]: string } = {};
  numeroId: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.objeto = this.coleccionObjetos[0];
    this.numeroId = (this.coleccionObjetos.length + 1)
  }

  cerrarModal() {
    this.cerrar.emit();
  }


  guardarObjeto() {
    if (this.nuevoRegistro['id'] !== this.numeroId.toString()) {
      alert("Se debe ingresar el número de ID impreso bajo el título.");
      return
    }
    if (isNaN(+this.nuevoRegistro['progreso']) == true) {
      alert("Se debe ingresar un número entero que represente el progreso.");
      return
    }
    if (Number(this.nuevoRegistro['progreso']) < 0 || Number(this.nuevoRegistro['progreso']) > 100 == true) {
      alert("El numero ingresado que representa el progreso debe ser un entero entre 0 y 100.");
      return
    }
    let x:number = Math.round(Number(this.nuevoRegistro['progreso']));
    this.nuevoRegistro['progreso'] = x.toString()

    const registro = this.nuevoRegistro;
    this.altaRegistro.emit(registro);

    alert("Se han agregado los datos.")

    this.cerrarModal();
  }

}
