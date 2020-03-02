import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service'
import { PruebaService } from '../../services/prueba.service'
import { Eventos } from 'src/app/models/Event';
import { Router, ActivatedRoute } from "@angular/router";

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


  constructor(
    private serviciosService: ServiciosService,
    private asignacion: PruebaService,
    private r: Router,
    private route: ActivatedRoute) {

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
