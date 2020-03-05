import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/models/Asignacion';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {

  asignaciones: Asignacion[] = [];
  cafesPanel: any = [];
  codigoPanel: string = "";
  codigoEvento: string = "";
  codigoCatador: string = "";

  constructor(private servicioServicios: ServiciosService,
    private r: Router, private route: ActivatedRoute) { }




  asignar() {
    let cafesCodigos = document.getElementsByClassName("codigoCafe")
    let cafesCantidad = document.getElementsByClassName("cantidadCafe")

    for (var i = 0; i < cafesCodigos.length; i++) {
      let asignacion: Asignacion = new Asignacion();

      asignacion.codPanel = this.codigoPanel;
      asignacion.cantidad = parseInt((<HTMLInputElement>cafesCantidad[i]).value);
      asignacion.codCatador = this.codigoCatador;
      asignacion.codCafe = cafesCodigos[i].innerHTML;

      this.asignaciones.push(asignacion);
    }
    console.log("::::::::::::::::::::::::::::::::::::::");
    console.log(this.asignaciones);
    console.log("::::::::::::::::::::::::::::::::::::::");


    this.servicioServicios.postAsignacion(this.asignaciones).subscribe(
      res => {
        alert(res)
      },
      err => { console.log(err); }


    )

  }
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
  GuardarAsignacion() { }
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

      }

    })

    this.servicioServicios.getCafesPanel(this.codigoPanel).subscribe(
      cafes => {
        this.cafesPanel = cafes;
        console.log(this.cafesPanel);

      },
      err => console.log("error")


    )

  }

}
