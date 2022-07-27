import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conocimiento-item',
  templateUrl: './conocimiento-item.component.html',
  styleUrls: ['./conocimiento-item.component.css']
})
export class ConocimientoItemComponent implements OnInit {
  @Input() conocimiento:any=[];

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    console.log("Abro modal de edicion")
  }

}
