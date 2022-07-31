import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Educacion } from '../interfaces/educacion';
import { Experiencia } from '../interfaces/experiencia';
import { Persona } from '../interfaces/persona';
import { Conocimiento } from '../interfaces/conocimiento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  obtenerDatos(tabla:string): Observable <any>{
    return this.http.get(`${this.apiUrl}/${tabla}`);
    //antes: return this.http.get(./assets...json);
  }

  modificarDatos(cambios:(Educacion | Experiencia | Conocimiento), tabla:string): Observable<(Educacion | Experiencia | Conocimiento)>{
    const url = `${this.apiUrl}/${tabla}/${cambios.id}`;
    return this.http.put<(Educacion | Experiencia | Conocimiento)>(url, cambios, httpOptions);
  }
}

//Modificar datos de persona hacerlo aparte
