import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() claseBoton: string = "";
  @Input() texto: string = "";
  @Output() btnClick = new EventEmitter();
  @Input() icono: string = "";
  @Input() titulo: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
