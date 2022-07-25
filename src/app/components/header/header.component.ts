import { Component, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  tema: boolean = false;
  clase: string = "";
  alternarTemaColor(){
     if(this.tema == false){
    this.renderer.addClass(document.body, 'tema-oscuro');
    this.clase = "img-invertida";
     }else{
      this.renderer.removeClass(document.body, 'tema-oscuro');
      this.clase = "";
     }
    this.tema = !this.tema;
    }





}
