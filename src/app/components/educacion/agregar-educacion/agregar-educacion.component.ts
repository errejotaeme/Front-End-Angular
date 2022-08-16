import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/interfaces/educacion';


@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  @Input() coleccionObjetos: any[] = [];
  @Output() cerrar = new EventEmitter();
  numeroId: number = 0;
  formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private datosPortfolio: PortfolioService) { }

    ngOnInit(): void {
      this.numeroId = (Number(this.coleccionObjetos[this.coleccionObjetos.length - 1].id ) + 1)

      this.formulario = this.formBuilder.group(
        {
          id: [this.numeroId, [Validators.required]],
          escuela: ['', [Validators.required]],
          titulo: ['', [Validators.required]],
          comentario: ['', [Validators.required]],
          inicio: ['', [Validators.required]],
          fin: ['', [Validators.required]]
        }
      );
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

    enviarRegistro() {
      const form: Educacion = this.formulario.value;
      this.datosPortfolio.agregarRegistro(form, "educacion").subscribe(Response =>{
        alert(Response);
        this.cerrarModal();
        location.reload();
      });
    }

}
