import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia:any=[];

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    console.log("Abro modal de edicion")
  }

}
