import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { PruebaService } from 'src/app/services/prueba.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-catador-form',
  templateUrl: './catador-form.component.html',
  styleUrls: ['./catador-form.component.css']
})
export class CatadorFormComponent implements OnInit {
  catadores: any = [];
  codigoPanel: string = "";
  codigoEvento: string = "";



  constructor(private servicioServicios: ServiciosService, private asignacion: PruebaService,
    private r: Router, private route: ActivatedRoute) {
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

  agregarCatadores() {
    this.servicioServicios.getCatadores().subscribe(
      _catadores => {
        this.catadores = _catadores;
        console.log(_catadores);
        this.r.navigate([`/eventos/${this.codigoEvento}/panel/${this.codigoPanel}`]);
      },
      err => console.log(err, "error")
    );
  }
  existeEvento() {
    this.servicioServicios.getEvento(this.codigoEvento).subscribe(
      _evento => {
        if (_evento) {
          this.agregarCatadores();
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

      if (params.has('idP')) {
        this.codigoPanel = params.get('idP');
        this.codigoEvento = params.get('idE');
        this.asignacion.setPanel(this.codigoPanel);
        this.asignacion.setEvento(this.codigoEvento);
      }

      this.existePanel();

    })



  }
}


