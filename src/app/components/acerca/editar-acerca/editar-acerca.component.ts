import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {
  @Input() objetoEdicion:any;
  @Output() cerrar = new EventEmitter();

  formulario:FormGroup = new FormGroup({});

  constructor(
    private formBuilder:FormBuilder,
    private datosPortfolio: PortfolioService) {
    }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        id: [this.objetoEdicion.id, [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required]],
        banner: ['', [Validators.required]],
        foto: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]]
      }
    );
  }

  restaurarValores(){
    let valoresOriginales:Persona = this.objetoEdicion;
    this.formulario.patchValue({
          email: valoresOriginales.email,
          nombre: valoresOriginales.nombre,
          banner: valoresOriginales.banner,
          foto: valoresOriginales.foto,
          titulo: valoresOriginales.titulo,
          descripcion: valoresOriginales.descripcion,
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  get Email(){
    return this.formulario.get('email');
  }
  get Nombre(){
    return this.formulario.get('nombre');
  }
  get Banner(){
    return this.formulario.get('banner');
  }
  get Foto(){
    return this.formulario.get('foto');
  }
  get Titulo(){
    return this.formulario.get('titulo');
  }
  get Descripcion(){
    return this.formulario.get('descripcion');
  }

  enviar(event:Event){
    event.preventDefault;
    const form:Persona = this.formulario.value;
    this.datosPortfolio.actualizarDatos(form, "persona").subscribe(Response =>{
      alert(Response);
      this.cerrarModal();
      location.reload();
    });
  }

}
