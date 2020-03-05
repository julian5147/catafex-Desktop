import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from '../models/Asignacion';




@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  API_URI = 'https://webapicatafex.azurewebsites.net/api/';
  evento_actual: string = ""

  constructor(private http: HttpClient) { }

  getEventos() {
    return this.http.get(`${this.API_URI}ApiGestionarEvento`);
  }

  getEvento(id: string) {
    return this.http.get(`${this.API_URI}ApiGestionarEvento?codigo=${id}`);
  }
  getCatadorHabilitado(id: string) {
    return this.http.get(`${this.API_URI}ApiRegistrarCatador/catadorHabilitado?codCatador=${id}`);
  }
  getPanelesEvento(id: string) {
    return this.http.get(`${this.API_URI}Panel/obtenerPanelesPorEvento?codEvento=${id}`);
  }
  getCatadores() {
    return this.http.get(`${this.API_URI}RegistrarCatador/obtenerHabilitados`);
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
  getCafesPanel(id: string) {
    return this.http.get(`${this.API_URI}Panel/cafesTipoCafePanel?codPanel=${id}`);
  }
  getCatadoresInhabilitados() {
    return this.http.get(`${this.API_URI}RegistrarCatador/obtenerInhabilitados`);
  }

  putHabilitarCatador(id: string) {

    return this.http.put(`${this.API_URI}RegistrarCatador/cambiarEstado?codCatador=${id}`, {});

  }


  postAsignacion(cataciones: Asignacion[]) {
    alert(JSON.stringify(cataciones))
    return this.http.post(`${this.API_URI}ApiAsignarCatador/asignar`, cataciones)
  }
  getVerificarPanelEvento(idP: string, idE: string) {
    return this.http.get(`${this.API_URI}Panel/panelPerteneceEvento?codPanel=${idP}&codEvento=${idE}`);

  }


}
