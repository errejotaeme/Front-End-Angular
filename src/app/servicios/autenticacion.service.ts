import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}),
  responseType: 'json' as const
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url='https://proyecto-portfolio.herokuapp.com/acceso';
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  iniciarSesion(credenciales:any):Observable<any> {
    const salida = JSON.stringify(credenciales);
    return this.http.post(this.url, salida, httpOptions).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }

}
