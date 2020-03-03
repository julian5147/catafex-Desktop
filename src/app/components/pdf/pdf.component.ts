import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/models/Reporte';
import { PDFService } from 'src/app/services/pdf.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PDFComponent implements OnInit {

  reporte: Reporte;
  image: any;

  constructor(
    private router: Router,
    private pdfServices: PDFService,
    private sanitizer: DomSanitizer,
    private r: ActivatedRoute) { }
  _Download() {
    var doc = new jsPDF({

      orientacion: 'l',
      unit: 'pt',
      format: "carta"
    });  // optional parameters


    doc.setFontSize(40);
    doc.text(80, 50, "Reporte: " + this.reporte.codigoPanel);
    doc.addImage(this.reporte.image, 'PNG', 10, 70);
    doc.fromHTML(document.getElementById("content"), 50, 350);
    doc.save("test.pdf");
  }

  ngOnInit(): void {

    this.reporte = this.pdfServices.getReporte();
    alert(this.reporte.codigoPanel)
    if (this.reporte.codigoPanel === ""){

      this.router.navigate(["/home"])
    }

    this.image = this.sanitizer.bypassSecurityTrustUrl(this.reporte.image);
  }
}
