import { Component, OnInit, HostBinding } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ServiciosService } from '../../services/servicios.service'


@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {
  @HostBinding('class') clasess = 'row';
  eventos: any = [];




  constructor(private serviciosService: ServiciosService) { }
  ngOnInit(): void {
    this.obtenerEventos();
  }

  /**
   * llama al servicio services para obtener todos los eventos
   */
  obtenerEventos() {
    this.serviciosService.getEventos().subscribe(
      res => {
        this.eventos = res;
      },
      err => console.log(err, "error")
    )
  }
}
