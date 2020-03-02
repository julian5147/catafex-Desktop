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
  
  panel: any = null

  constructor(private servicioServicios: ServiciosService, private asignacion: PruebaService,
    private r: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('idP')) {
        this.codigoPanel = params.get('idP');
        this.codigoEvento = params.get('idE');
        this.asignacion.setPanel(this.codigoPanel);
        this.asignacion.setEvento(this.codigoEvento);
      }

    })


    this.servicioServicios.getPanel(this.codigoPanel).subscribe(
      res => {
        console.log(res);
        if (res) {
          if (this.codigoPanel !== "") {

            this.servicioServicios.getCatadores().subscribe(
              res => {
                this.catadores = res;
                console.log(res);
                this.r.navigate([`/eventos/${this.codigoEvento}/panel/${this.codigoPanel}`]);
             },
              err => console.log(err, "error")
            );
          }
          else {
            alert("No puede ingresar asi");

          }

        }
        else {
          alert("No se encuentra ese panel")
          this.r.navigate([`/eventos/${this.codigoEvento}/panel`]);
        }

      },
      err => console.log(err, "error")
    );




  }
}


