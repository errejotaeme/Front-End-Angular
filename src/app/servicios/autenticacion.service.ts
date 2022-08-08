import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url='(url de la api)';
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("Anda!");                                                 //inf de sesion almacenada json
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }                                                         //BehSubj almacena el ESTADO

  iniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data=>{ //modifica respuesta de la api antes de pasarla componente
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

}/*DEBO RECIBIR UN TOKEN!!!!*/
