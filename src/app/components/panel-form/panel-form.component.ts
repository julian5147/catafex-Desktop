import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-panel-form',
  templateUrl: './panel-form.component.html',
  styleUrls: ['./panel-form.component.css']
})
export class PanelFormComponent implements OnInit {
  panel: string;
  evento: string;
  catador: string;
  constructor(private asignacion: PruebaService) { }

  ngOnInit(): void {
    this.panel = this.asignacion.getPanel();
    this.evento = this.asignacion.getEvento();
    this.catador = this.asignacion.getCatador();
  }

}
