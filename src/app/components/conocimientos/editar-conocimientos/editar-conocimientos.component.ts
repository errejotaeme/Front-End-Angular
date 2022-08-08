import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Conocimiento } from 'src/app/interfaces/conocimiento';

@Component({
  selector: 'app-editar-conocimientos',
  templateUrl: './editar-conocimientos.component.html',
  styleUrls: ['./editar-conocimientos.component.css']
})
export class EditarConocimientosComponent implements OnInit {

  @Input() objetoEdicion:any;
  @Output() cerrar = new EventEmitter();

  formulario:FormGroup = new FormGroup({});

  constructor(
    private formBuilder:FormBuilder,
    private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        id: [this.objetoEdicion.id, [Validators.required]],
        nombre: ['', [Validators.required]],
        progreso: [, [Validators.required, Validators.min(0), Validators.max(100)]],
      }
    );
  }

  restaurarValores(){
    let valoresOriginales:Conocimiento = this.objetoEdicion;
    this.formulario.patchValue({
          nombre: valoresOriginales.nombre,
          progreso: valoresOriginales.progreso
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  get Nombre(){
    return this.formulario.get('nombre');
  }
  get Progreso(){
    return this.formulario.get('progreso');
  }

  enviar(event:Event){
    event.preventDefault;
    const form:Conocimiento = this.formulario.value;
    this.datosPortfolio.actualizarDatos(form, "conocimientos").subscribe();
    alert("Se han editado los datos. Actualice el navegador para ver correctamente los cambios.");
    this.cerrarModal();
  }

}
