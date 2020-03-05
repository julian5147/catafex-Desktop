import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
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
  codigoCatador: string = "";



  constructor(private servicioServicios: ServiciosService,
    private r: Router, private route: ActivatedRoute) {
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


  verificarParnelEvento() {

    this.servicioServicios.getVerificarPanelEvento(this.codigoPanel, this.codigoEvento).subscribe(

      _res => {
        if (_res) {
          this.agregarCatadores();
          //  this.r.navigate([`/eventos/${this.codigoEvento}/panel/${this.codigoPanel}/catador/${this.codigoCatador}`])
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

      if (params.has('idP')) {
        this.codigoPanel = params.get('idP');
        this.codigoEvento = params.get('idE');
    
     
      }

      this.verificarParnelEvento();

    })



  }
}


