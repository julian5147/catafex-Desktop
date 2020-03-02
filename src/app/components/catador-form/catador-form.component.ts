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

  constructor(private servicioServicios: ServiciosService, private asignacion: PruebaService,
    private r: Router, private route: ActivatedRoute) {



  }
  cambiarCatador(id: string) {
    this.asignacion.setCatador(id);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('id')) {
        this.codigoPanel = params.get('id');
      }

    })
    if (this.codigoPanel !== "") {
      this.servicioServicios.getCatadores().subscribe(
        res => {
          this.catadores = res;
          console.log(res);

        },
        err => console.log(err, "error")
      );
    }
    else {
      alert("No puede ingresar asi");

    }


  }
}


