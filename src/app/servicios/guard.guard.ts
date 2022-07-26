import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private autenticacion:AutenticacionService,
    private ruta:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let currentUser = this.autenticacion.usuarioAutenticado;
      if(currentUser && currentUser.accesToken) {
        return true;
      } else {
        this.ruta.navigate(['/iniciar-sesion']);
        return false;
      }
  }

}
