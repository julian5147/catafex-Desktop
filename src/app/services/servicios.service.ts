import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Catador } from '../models/Catador'
import { Game } from '../models/Games'



@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  API_URI = 'https://webapicatafex.azurewebsites.net/api/';
  evento_actual: string = ""


  constructor(private http: HttpClient) {

  }

  getEventos() {
    return this.http.get(`${this.API_URI}ApiGestionarEvento`);
  }

  getEvento(id: string) {
    return this.http.get(`${this.API_URI}ApiGestionarEvento?codigo=${id}`);
  }
  getCatador(id: string) { }
  getPanelesEvento(id: string) {
    return this.http.get(`${this.API_URI}Panel/obtenerPanelesPorEvento?codEvento=${id}`);
  }
  getCatadores() {
    return this.http.get(`${this.API_URI}ApiRegistrarCatador`);
  }
  getPanel(id: string) {
    return this.http.get(`${this.API_URI}ApiGestionarPanel?codigo=${id}`);
  }

  getGrafico(id: string) {

    return this.http.get(`${this.API_URI}Reporte/obtenerGrafico?codPanel=${id}`);
  }
  getObservaciones(id: string) {

    return this.http.get(`${this.API_URI}Reporte/obtenerObservaciones?codPanel=${id}`);
  }


}
