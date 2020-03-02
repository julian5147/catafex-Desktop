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

    this.asignacion.codPanel = cod;
  }
  getPanel() { return this.asignacion.codPanel; }

  setEvento(cod: string) { this.asignacion.codEvento = cod }
  getEvento() { return this.asignacion.codEvento; }


  setCatador(cod: string) { this.asignacion.codCatador = cod }
  getCatador() { return this.asignacion.codCatador; }


  setCafe(cod: string) { this.asignacion.codCafe = cod }
  getCafé() { return this.asignacion.codCafe; }


  setVeces(cod: number) { this.asignacion.cantVeces = cod }
  getVeces() { return this.asignacion.cantVeces; }



}
