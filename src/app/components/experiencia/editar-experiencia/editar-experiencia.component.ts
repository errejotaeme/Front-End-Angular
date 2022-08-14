import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

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
        posicion: ['', [Validators.required]],
        empresa: ['', [Validators.required]],
        tareas: ['', [Validators.required]],
        modalidad: ['', [Validators.required]],
        inicio: ['', [Validators.required]],
        fin: ['', [Validators.required]],
      }
    );
  }

  restaurarValores(){
    let valoresOriginales:Experiencia = this.objetoEdicion;
    this.formulario.patchValue({
          posicion: valoresOriginales.posicion,
          empresa: valoresOriginales.empresa,
          tareas: valoresOriginales.tareas,
          modalidad: valoresOriginales.modalidad,
          inicio: valoresOriginales.inicio,
          fin: valoresOriginales.fin
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  get Posicion(){
    return this.formulario.get('posicion');
  }
  get Empresa(){
    return this.formulario.get('empresa');
  }
  get Fin(){
    return this.formulario.get('fin');
  }
  get Inicio(){
    return this.formulario.get('inicio');
  }
  get Tareas(){
    return this.formulario.get('tareas');
  }
  get Modalidad(){
    return this.formulario.get('modalidad');
  }

  enviar(event:Event){
    event.preventDefault;
    const form:Experiencia = this.formulario.value;
    this.datosPortfolio.actualizarDatos(form, "experiencias").subscribe(Response =>{
      alert(Response);
      this.cerrarModal();
      location.reload();
    });
  }

}
