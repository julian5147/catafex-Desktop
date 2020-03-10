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

  /**
   * Consume el WEB Service de Gestionar Evento
   * 
   * @return Una lista de los eventos que se encuentran guadados en
   * la base de datos. si no existe ningún evento, retorna una lista vacía
   */
  getEventos() {
    return this.http.get(`${this.API_URI}ApiGestionarEvento`);
  }

  /**
   * 
   * @param id identificador del evento
   * 
   * Consume el WEB Service de Gestionar eventos 
   * 
   * @return el evento seleccionado, se busca por el id ingresado,
   * si no existe ese evento, retorna null
   */
  getEvento(id: string) {
    return this.http.get(`${this.API_URI}ApiGestionarEvento?codigo=${id}`);
  }
  /**
   * @param id identificador del catador
   * 
   * Consume el WEB Service de Registrar catador
   * 
   * @return si el catador está habilitado, retorna un JSON con los datos
   * del catador, si no está habilitado o no existe retorna null
   */
  getCatadorHabilitado(id: string) {
    return this.http.get(`${this.API_URI}ApiRegistrarCatador/catadorHabilitado?codCatador=${id}`);
  }
  /**
   * 
   * @param id identificador del evento
   * 
   * Consume el WEB Service Panel 
   * 
   * @return si el evento existe, retorna una lista con los paneles que 
   * fueron creados para el evento seleccionado, si el evento no existe
   * retorna null
   */
  getPanelesEvento(id: string) {
    return this.http.get(`${this.API_URI}Panel/obtenerPanelesPorEvento?codEvento=${id}`);
  }
  /**
   * Conusme el WEB Service Registrar catador 
   * 
   * @return Retorna una lista con todos los catadores  que se 
   * encuentran guardados en la base de datos, si no existe ningún catador
   * retorna null
   */
  getCatadores() {
    return this.http.get(`${this.API_URI}RegistrarCatador/obtenerHabilitados`);
  }
  /**
   * 
   * @param id Identificador del panel
   * 
   * Cosnsume el WEB Service Gestionar panel
   * 
   * @return el panel  seleccionado, se busca por el id ingresado,
   * si no existe ese panel, retorna null
   */
  getPanel(id: string) {
    return this.http.get(`${this.API_URI}ApiGestionarPanel?codigo=${id}`);
  }

  /**
   * 
   * @param id Identificador del panel
   * 
   * Consume el WEB Service Reporte
   * 
   * @return si el Panel finalizó, es decir que ya todos los catadores que
   * estaban asignados a ese panel ya acabaron de catar todos los cafés 
   * retorn a un arreglo de bytes con la información del gráfico
   */

  getGrafico(id: string) {

    return this.http.get(`${this.API_URI}Reporte/obtenerGrafico?codPanel=${id}`);
  }
  /**
   * 
   * @param id identificador del panel
   * 
   * Consume el WEB Service Reporte
   * 
   * @return Una lista de observaciones que hicieron todos los catadores
   * asignados a el panel seleccionado
   */
  getObservaciones(id: string) {

    return this.http.get(`${this.API_URI}Reporte/obtenerObservaciones?codPanel=${id}`);
  }
  /**
   * 
   * @param id identificador del panel
   * 
   * Consume el WEB Service Registrar catador
   * 
   * @return el tipo del café del panel, si el panel no existe en la base de 
   * datos, retorna null
   */
  getCafesPanel(id: string) {
    return this.http.get(`${this.API_URI}Panel/cafesTipoCafePanel?codPanel=${id}`);
  }
  /**
   * Consume el WEB Service Registrar catador
   * 
   * @return una lista con todos los catadores que no se encuentran habilitados,
   * es decir que no tienen acceso a la aplicación
   */
  getCatadoresInhabilitados() {
    return this.http.get(`${this.API_URI}RegistrarCatador/obtenerInhabilitados`);
  }

  /**
   * @param id identificador del catador
   * 
   * @return si se habilitó correctamente, devuelve una respuesta con OK 200
   * si no se encontró el catador, devuelve un 404 Not Found
   */
  putHabilitarCatador(id: string) {

    return this.http.put(`${this.API_URI}RegistrarCatador/cambiarEstado?codCatador=${id}`, {});
  }

  /**
   * 
   * @param cataciones lista de las asignaciones de un panel con todos sus catadores
   * 
   * Consume el WEB Service Asignar catador
   * 
   * @return 
   */
  postAsignacion(cataciones: Asignacion[]) {

    return this.http.post(`${this.API_URI}ApiAsignarCatador/asignar`, cataciones)
  }
  getVerificarPanelEvento(idP: string, idE: string) {
    return this.http.get(`${this.API_URI}Panel/panelPerteneceEvento?codPanel=${idP}&codEvento=${idE}`);

  }


}
