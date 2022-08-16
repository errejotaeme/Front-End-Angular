import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { GuardGuard } from './servicios/guard.guard';

import { CompletoComponent } from './components/completo/completo.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const rutas:Routes = [
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard], children: [
    {path: 'educacion', component: EducacionComponent, canActivate:[GuardGuard]},
    {path:'experiencia', component: ExperienciaComponent, canActivate:[GuardGuard]},
    {path:'conocimientos', component: ConocimientosComponent, canActivate:[GuardGuard]},
    {path:'proyectos', component: ProyectosComponent, canActivate:[GuardGuard]},
    {path:'completo', component: CompletoComponent, canActivate:[GuardGuard]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
