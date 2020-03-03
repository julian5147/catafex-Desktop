import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ServiciosService } from 'src/app/services/servicios.service';
@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {



  constructor(private serviciosService: ServiciosService) { }



  corregir(msg: String) {

  }
  prueba() {

    var img = new Image();
    img.src = '../../../assets/grafico.jpeg';



    var doc = new jsPDF({

      orientacion: 'l',
      unit: 'pt',
      format: "carta"
    });  // optional parameters
    console.log("es ", img.height);
    doc.addImage(img, 'jpg', 30, 50);
    doc.fromHTML(document.getElementById("content"), 50, 350);



    doc.save("new.pdf");
  }
  ngOnInit(): void {

    this.serviciosService.getGrafico("CP-05").subscribe(
      res => {
        console.log("___________");
        console.log(res);
        console.log("___________");
      
     },
     err=>console.log(err)
     
     
     )

  }

}
