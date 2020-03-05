import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-habilitar',
  templateUrl: './habilitar.component.html',
  styleUrls: ['./habilitar.component.css']
})
export class HabilitarComponent implements OnInit {
  catadores: any = [];
  constructor(
    private servicioServicios: ServiciosService,
    private r: Router,
    private route: ActivatedRoute) { }
  /**
   * 
   * @param codCatador 
   */

  habilitar(codCatador: string) {
    alert(codCatador)
    this.servicioServicios.putHabilitarCatador(codCatador).subscribe(
      _res => {
        this.r.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.r.navigate(["/habilitar"])
        )

      },
      err => { console.log(err); }
    )
  }
  /**
   * 
   */
  obtenerCatadoresInhabilitados() {
    this.servicioServicios.getCatadoresInhabilitados().subscribe(
      _catadores => {
        this.catadores = _catadores;
      },
      err => {
        console.log(err);
      }
    )
  }


  ngOnInit(): void {

    this.obtenerCatadoresInhabilitados();

  }

}
