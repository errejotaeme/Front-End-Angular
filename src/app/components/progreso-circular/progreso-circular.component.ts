import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progreso-circular',
  templateUrl: './progreso-circular.component.html',
  styleUrls: ['./progreso-circular.component.css']
})
export class ProgresoCircularComponent implements OnInit {

  @Input() porcentaje:any;

  rotarBlanco:{ [klass: string]: any; }={};
  rotarNegro:{ [klass: string]: any; }={};

  constructor() { }

  ngOnInit(): void {
    if(Number(this.porcentaje) <= 50){
      let x:number = (Number(this.porcentaje) / 100) * 360;
      let y:string = x.toString();
      this.rotarBlanco['transform'] = 'rotate(' +y+ 'deg)';
      this.rotarNegro['transform'] = 'rotate(0deg)';
      this.rotarNegro['visibility'] = 'hidden';
    }else{
      let x:number = ((Number(this.porcentaje) -50) / 100) * 360;
      let y:string = x.toString();
      this.rotarNegro['transform'] = 'rotate(' +y+ 'deg)';
      this.rotarNegro['visibility'] = '';
      this.rotarBlanco['transform'] = 'rotate(180deg)';
    }
    console.log(this.rotarBlanco, this.rotarNegro )
  }

}
