import { Component, OnInit, HostBinding, Input, SystemJsNgModuleLoader } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service'

import { Eventos } from 'src/app/models/Event';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf';
import { PDFService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})


export class PanelListComponent implements OnInit {
  paneles: any = [];

  @HostBinding('class') clasess = 'row';
  codigoEvento: string = "";
  codigoPanel: string = "";
  observaciones: any = []

  image: any;

  constructor(
    private serviciosService: ServiciosService,
    private r: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private pdfService: PDFService
  ) {

  }
  /**
   * 
   */
  quitarNulos() {
    let newObser = [];

    this.observaciones.forEach(e => {

      if (e !== null) {
        newObser.push(e)
      }
      else { newObser.push("nuevo comentario"); }
    });

    this.observaciones = newObser;
  }
  /**
   * 
   * @param id 
   */
  verificar(id: string) {
    this.serviciosService.getGrafico(id).subscribe(
      res => {
        if (res !== null) {

          this.serviciosService.getObservaciones(id).subscribe(
            obs => {
              this.observaciones = obs;

              this.quitarNulos();
              this.pdfService.setObservaciones(this.observaciones);

              this.image = 'data:image/png;base64,' + res;
              this.pdfService.setImagen(this.image);
              this.pdfService.setCodigoPanel(id);
              this.r.navigate([`/eventos/{{codigoEvento}}/panel/${id}/download`]);
              //this._Download();

            }, err => {
              console.log(err);
            }
          )
        }
        else { alert("el panel no ha finalizado") }
      },
      err => console.log(err)
    )
  }
  /**
   * 
   */
  obtenerPanelesEvento() {

    this.paneles = [];
    if (this.codigoEvento !== "") {
      this.serviciosService.getPanelesEvento(this.codigoEvento).subscribe(
        res => { this.paneles = res; },
        err => console.log(err, "error")
      )
    }
    else {
      alert("No puede ingresar asi en el panel  ");
    }
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.has('id')) { this.codigoEvento = params.get('id'); }
      else { alert("no contiene") }
    })

    this.obtenerPanelesEvento();
  }
}
