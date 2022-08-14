import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),responseType: 'text' as 'json'
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8080'; //era 3000

  constructor(private http:HttpClient) { }

  obtenerDatos(tabla:string): Observable <any>{
    return this.http.get(`${this.apiUrl}/${tabla}`);
  }

  actualizarDatos(cambios:any, tabla:string): Observable<any>{
    const salida = JSON.stringify(cambios);
    const url = `${this.apiUrl}/${tabla}`;
    return this.http.put<any>(url, salida, httpOptions);
  }

  agregarRegistro(registro:any, tabla:string): Observable<any>{
    const salida = JSON.stringify(registro);
    const url = `${this.apiUrl}/${tabla}`;
    return this.http.post<any>(url, salida, httpOptions);
  }

  borrarDatos(borrar:any, tabla:string): Observable<any>{
    const url = `${this.apiUrl}/${tabla}/${borrar.id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}

/*DEBO UTILIZAR INTERCEPTOR PARA QUE LE AGREGUE EL TOKEN AL ENCABEZADO DEL MENSAJE ANTES DE HACER LA LLAMADA A LA API*/
