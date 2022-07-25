import { Component, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tema: boolean = false;
  clase: string = "";

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }


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

  pruebaLogin(){
    console.log("Hice clic en login")
  }

}
