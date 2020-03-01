import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';


@Component({
  selector: 'app-catadores-list',
  templateUrl: './catadores-list.component.html',
  styleUrls: ['./catadores-list.component.css']
})
export class CatadoresListComponent implements OnInit {
  @HostBinding('class') clasess = 'row';
  catadores: any = [];

  constructor(private servicioServicios: ServiciosService) {

  }

  ngOnInit(): void {
    this.servicioServicios.getCatadores().subscribe(
      res => {
        this.catadores = res;
        console.log(res);

      },
      err => console.log(err, "error")
    );
  }

}
