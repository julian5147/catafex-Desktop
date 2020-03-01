import { Injectable } from '@angular/core';
import { Asignacion } from '../models/Asignacion';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private asignacion: Asignacion;


  constructor() {
    this.asignacion = new Asignacion();
  }


  setPanel(cod: string) {
    alert("se cambia el codigo del panel a " + cod);
    this.asignacion.codPanel = cod;
  }
  getPanel() { return this.asignacion.codPanel; }

  setEvento(cod: string) {     alert("se cambia el codigo del evento a " + cod);this.asignacion.codEvento = cod }
  getEvento() { return this.asignacion.codEvento; }


  setCatador(cod: string) {    alert("se cambia el codigo del catador a " + cod); this.asignacion.codCatador = cod }
  getCatador() { return this.asignacion.codCatador; }


  setCafe(cod: string) {    alert("se cambia el codigo del cafe a " + cod); this.asignacion.codCafe = cod }
  getCafé() { return this.asignacion.codCafe; }


  setVeces(cod: number) {    alert("se cambia cantidad de veces  a " + cod); this.asignacion.cantVeces = cod }
  getVeces() { return this.asignacion.cantVeces; }



}
