import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-catador-form',
  templateUrl: './catador-form.component.html',
  styleUrls: ['./catador-form.component.css']
})
export class CatadorFormComponent implements OnInit {
  catadores: any = [];
  codigoPanel: string = "Nada";

  constructor(private servicioServicios: ServiciosService, private asignacion: PruebaService) {



  }
  cambiarCatador(id: string) {
    this.asignacion.setCatador(id);
  }
  ngOnInit(): void {
    this.codigoPanel = this.asignacion.getEvento();
    if (this.codigoPanel !== "None") {
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


