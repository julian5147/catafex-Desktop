import { Component, OnInit, HostBinding, Input, SystemJsNgModuleLoader } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service'
import { PruebaService } from '../../services/prueba.service'
import { Eventos } from 'src/app/models/Event';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf';

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
    private asignacion: PruebaService,
    private r: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  }

  quitarNulos() {
    let newObser = [];

    this.observaciones.forEach(e => {

      if (e !== null) {
        newObser.push(e)
      }
    });

    this.observaciones= newObser;
  }
  _Download() {
    var doc = new jsPDF({

      orientacion: 'l',
      unit: 'pt',
      format: "carta"
    });  // optional parameters


    //doc.setFontSize(40);
    doc.text(35, 25, "Reporte");
    doc.addImage(this.image, 'PNG', 10, 25);
    //doc.fromHTML(document.getElementById("content"), 50, 350);
    doc.save("test.pdf");

  }
  verificar(id: string) {
    this.serviciosService.getGrafico("CP-05").subscribe(
      res => {
        if (res !== null) {
          alert("descargando")
          this.serviciosService.getObservaciones("CP-05").subscribe(
            obs => {
              this.observaciones = obs;
              this.quitarNulos();
              this.image = 'data:image/png;base64,' + res;
              this._Download();

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


  Download() {
    const doc = new jsPDF();

    let newObser = [];

    this.observaciones.forEach(e => {

      if (e !== null) {
        newObser.push(e)
      }
    });
    doc.text(newObser, 10, 10);
    // doc.addImage(this.image, 'png', 30, 50);
    doc.fromHTML(document.getElementById("content"), 50, 350);
    doc.save("test.pdf");
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.codigoEvento = params.get('id');
        this.asignacion.setEvento(this.codigoEvento);
      }
      else
        alert("no contiene")
    })

    this.paneles = [];
    if (this.codigoEvento !== "") {
      this.serviciosService.getPanelesEvento(this.codigoEvento).subscribe(
        res => {
          this.paneles = res;
          console.log(res);
        },
        err => console.log(err, "error")
      )
    }
    else {
      alert("No puede ingresar asi en el pasnel  ");
      //  this.r.navigate(["/home"])
    }
  }
}
