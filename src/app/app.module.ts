import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ConocimientoItemComponent } from './components/conocimiento-item/conocimiento-item.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BotonComponent } from './components/boton/boton.component';
import { CompletoComponent } from './components/completo/completo.component';
import { PortfolioService } from './servicios/portfolio.service';
import { ModalEdicionComponent } from './components/modal-edicion/modal-edicion.component';
import { ModalAgregarComponent } from './components/modal-agregar/modal-agregar.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';

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
    CompletoComponent,
    EducacionItemComponent,
    ExperienciaItemComponent,
    ConocimientoItemComponent,
    ModalEdicionComponent,
    ModalAgregarComponent,
    ModalEliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
