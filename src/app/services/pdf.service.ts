import { Injectable } from '@angular/core';
import { Reporte } from '../models/Reporte';

@Injectable({
  providedIn: 'root'
})
export class PDFService {
  private reporte: Reporte;
  constructor() { this.reporte = new Reporte(); }

  setCodigoPanel(id) { this.reporte.codigoPanel = id; }
  setObservaciones(observaciones) { this.reporte.observaciones = observaciones; }
  setImagen(imagen) { this.reporte.image = imagen; }

  /**
   * retorna un reporte
   */
  getReporte() { return this.reporte; }
}
