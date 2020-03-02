import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/models/Asignacion';
import { ServiciosService } from 'src/app/services/servicios.service';
import { PruebaService } from 'src/app/services/prueba.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {

  asignaciones: any = []
  codigoPanel: string = "";
  codigoEvento: string = "";
  codigoCatador: string = "";

  constructor(private servicioServicios: ServiciosService, private asignacion: PruebaService,
    private r: Router, private route: ActivatedRoute) { }




  asignar() { }
  existeCatador() {
    this.servicioServicios.getPanel(this.codigoPanel).subscribe(
      _panel => {
        if (_panel) {
          this.existeEvento();
        }
        else {
          alert("No se encuentra ese panel")
          this.r.navigate([`/eventos/${this.codigoEvento}/panel`]);
        }
      },
      err => console.log(err, "error")
    );

  }

  existePanel() {
    this.servicioServicios.getPanel(this.codigoPanel).subscribe(
      _panel => {
        if (_panel) {
          this.existeEvento();
        }
        else {
          alert("No se encuentra ese panel")
          this.r.navigate([`/eventos/${this.codigoEvento}/panel`]);
        }
      },
      err => console.log(err, "error")
    );
  }


  existeEvento() {
    this.servicioServicios.getEvento(this.codigoEvento).subscribe(
      _evento => {
        if (_evento) {
          this.asignar();
        } else {
          alert("No se encuentra ese evento")
          this.r.navigate([`/eventos`]);
        }
      },
      err => console.log(err, "error")
    )

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('idC')) {
        this.codigoCatador = params.get('idC');
        this.codigoPanel = params.get('idP');
        this.codigoEvento = params.get('idE');
        this.asignacion.setPanel(this.codigoPanel);
        this.asignacion.setEvento(this.codigoEvento);
        this.asignacion.setCatador(this.codigoCatador);
      }

    })

  }

}
