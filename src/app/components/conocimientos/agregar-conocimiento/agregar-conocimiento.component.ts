import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Conocimiento } from 'src/app/interfaces/conocimiento';


@Component({
  selector: 'app-agregar-conocimiento',
  templateUrl: './agregar-conocimiento.component.html',
  styleUrls: ['./agregar-conocimiento.component.css']
})
export class AgregarConocimientoComponent implements OnInit {

  @Input() coleccionObjetos: any[] = [];
  @Output() cerrar = new EventEmitter();
  numeroId: number = 0;
  formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.numeroId = (this.coleccionObjetos.length + 1)

    this.formulario = this.formBuilder.group(
      {
        id: [this.numeroId.toString(), [Validators.required]],
        nombre: ['', [Validators.required]],
        progreso: [, [Validators.required, Validators.min(0), Validators.max(100)]],
      }
    );
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  get Nombre() {
    return this.formulario.get('nombre');
  }
  get Progreso() {
    return this.formulario.get('progreso');
  }

  enviarRegistro(event: Event) {
    event.preventDefault;
    const form: Conocimiento = this.formulario.value;
    this.datosPortfolio.agregarRegistro(form, "conocimientos").subscribe();
    alert("Se ha creado un nuevo registro. Actualice el navegador para ver correctamente los cambios.");
    this.cerrarModal();
  }

}



