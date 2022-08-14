import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/interfaces/educacion';


@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

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
        comentario: ['', [Validators.required]],
        escuela: ['', [Validators.required]],
        fin: ['', [Validators.required]],
        inicio: ['', [Validators.required]],
        titulo: ['', [Validators.required]]
      }
    );
  }

  restaurarValores(){
    let valoresOriginales:Educacion = this.objetoEdicion;
    this.formulario.patchValue({
          comentario: valoresOriginales.comentario,
          escuela: valoresOriginales.escuela,
          fin: valoresOriginales.fin,
          inicio: valoresOriginales.inicio,
          titulo: valoresOriginales.titulo
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  get Comentario(){
    return this.formulario.get('comentario');
  }
  get Escuela(){
    return this.formulario.get('escuela');
  }
  get Fin(){
    return this.formulario.get('fin');
  }
  get Inicio(){
    return this.formulario.get('inicio');
  }
  get Titulo(){
    return this.formulario.get('titulo');
  }

  enviar(event:Event){
    event.preventDefault;
    const form:Educacion = this.formulario.value;
    this.datosPortfolio.actualizarDatos(form, "educacion").subscribe(Response =>{
      alert(Response);
      this.cerrarModal();
      location.reload();
    });
  }

}
