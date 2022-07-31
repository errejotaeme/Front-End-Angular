import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { CompletoComponent } from './components/completo/completo.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';



const rutas:Routes = [
  {path: 'educacion', component: EducacionComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'conocimientos', component: ConocimientosComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'completo', component: CompletoComponent}
]



@NgModule({

  imports: [RouterModule.forRoot(rutas, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
