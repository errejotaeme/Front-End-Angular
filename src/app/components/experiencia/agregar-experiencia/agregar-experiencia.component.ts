import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

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
          posicion: ['', [Validators.required]],
          empresa: ['', [Validators.required]],
          tareas: ['', [Validators.required]],
          modalidad: ['', [Validators.required]],
          inicio: ['', [Validators.required]],
          fin: ['', [Validators.required]],
        }
      );
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

    enviarRegistro(event: Event) {
      event.preventDefault;
      const form: Experiencia = this.formulario.value;
      this.datosPortfolio.agregarRegistro(form, "experiencias").subscribe();
      alert("Se ha creado un nuevo registro. Actualice el navegador para ver correctamente los cambios.");
      this.cerrarModal();
    }


}
