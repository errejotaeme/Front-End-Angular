import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  @Input() educacion:any= [];

  //debe tomar el valor que me retorne el servicio que controla inicio sesion
  logeado:boolean=true;

  editarItem:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  modalEdicion(){
    this.editarItem = !this.editarItem;
  }

}
