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
  cedulaCatador: string = "";

  constructor(private servicioServicios: ServiciosService,
    private r: Router, private route: ActivatedRoute) { }



  /**
   * 
   */
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


    this.servicioServicios.postAsignacion(this.asignaciones).subscribe(

      res => {
        alert("Se asignó correctamente")
        this.r.navigate([`/eventos/${this.codigoEvento}/panel/${this.codigoPanel}`])
      },

      err => { console.log(err); }
    )

  }

  /**
   * 
   */
  verificarParnelEvento() {

    this.servicioServicios.getVerificarPanelEvento(this.codigoPanel, this.codigoEvento).subscribe(

      _res => {
        if (_res) {
          console.log("errors");
          

          this.servicioServicios.getCatadorHabilitado(this.codigoCatador).subscribe(
            _cat => {
              console.log(" asdopasdasd");
              
              if (_cat) {
                this.servicioServicios.getCafesPanel(this.codigoPanel).subscribe(
                  cafes => {
                    this.cafesPanel = cafes;
                    console.log(this.cafesPanel);

                  },
                  err => alert("error")
                )

              }
              else {
                alert("El panel no pertenece a ese evento")
                this.r.navigate(["/home"])
              }
            },
            err => {
              console.log(err);
            }
          )
        }
        else {
          alert("El panel no pertenece a ese evento")
          this.r.navigate(["/home"])
        }
      },
      err => {
        console.log(err);
      }
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

    this.verificarParnelEvento();

  }

}
