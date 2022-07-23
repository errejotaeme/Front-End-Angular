import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BotonComponent } from './components/boton/boton.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletoComponent } from './components/completo/completo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    ConocimientosComponent,
    ProyectosComponent,
    BotonComponent,
    CompletoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
