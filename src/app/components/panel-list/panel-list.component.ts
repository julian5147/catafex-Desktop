import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service'
import { PruebaService } from '../../services/prueba.service'
import { Eventos } from 'src/app/models/Event';
import { Router } from "@angular/router";

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  paneles: any = [];

  @HostBinding('class') clasess = 'row';
  codigoEvento: string = "Nada";

  constructor(private serviciosService: ServiciosService, private asignacion: PruebaService
    , private r: Router) {

  }
  cambiarPanel(id: string) {
    this.asignacion.setPanel(id);
  }
  ngOnInit(): void {


    this.paneles = [];
    this.codigoEvento = this.asignacion.getEvento();
    if (this.codigoEvento !== "None") {
      this.serviciosService.getPanelesEvento(this.codigoEvento).subscribe(
        res => {

          this.paneles = res;
          console.log(res);
        },

        err => console.log(err, "error")
      )
    }
    else {
      alert("No puede ingresar asi");

    }

  }

}
