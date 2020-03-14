import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Asignacion } from "./models/Asignacion";
import { ServiciosService } from "./services/servicios.service";

fdescribe('unitTest', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ServiciosService]
        });
    });

    describe('tests para asignar catador', () => {
        it('Debe asignar correctamente a un catador', inject([HttpTestingController, ServiciosService], (httpMock: HttpTestingController, serviciosserviceTested: ServiciosService) => {
            const API_URI = 'https://webapicatafex.azurewebsites.net/api/ApiAsignarCatador/asignar'
            var asignacion = new Asignacion();
            var asignaciones: Array<Asignacion> = [];
            asignacion.codPanel = "CP-7";
            asignacion.codCatador = "1701423473";
            asignacion.codCafe = "CF-4";
            asignacion.cantidad = 3;
            asignacion.codCatacion = "CT-5";
            asignaciones.push(asignacion)
            serviciosserviceTested.postAsignacion(asignaciones)
                .subscribe((res) => {
                    expect(res).toEqual("Se asignó correctamente")
                });
            const req = httpMock.expectOne(API_URI);
            expect(req.request.method).toBe('POST');
            req.flush("Se asignó correctamente");
        }));

        it('Intentar asignar a un catador con la cantidad de veces negativa', inject([HttpTestingController, ServiciosService], (httpMock: HttpTestingController, serviciosserviceTested: ServiciosService) => {
            const API_URI = 'https://webapicatafex.azurewebsites.net/api/ApiAsignarCatador/asignar'
            var asignacion = new Asignacion();
            var asignaciones: Array<Asignacion> = [];
            asignacion.codPanel = "CP-7";
            asignacion.codCatador = "1701423473";
            asignacion.codCafe = "CF-4";
            asignacion.cantidad = -2;
            asignacion.codCatacion = "CT-5";
            asignaciones.push(asignacion)
            serviciosserviceTested.postAsignacion(asignaciones)
                .subscribe((res) => {
                },
                    (err) => expect(err.error).toEqual("La cantidad a catar no puede ser menor o igual a cero")
                );
            const req = httpMock.expectOne(API_URI);
            expect(req.request.method).toBe('POST');
            req.flush("La cantidad a catar no puede ser menor o igual a cero");
        }));

        it('Intentar asignar a un catador con la cantidad de veces en cero', inject([HttpTestingController, ServiciosService], (httpMock: HttpTestingController, serviciosserviceTested: ServiciosService) => {
            const API_URI = 'https://webapicatafex.azurewebsites.net/api/ApiAsignarCatador/asignar'
            var asignacion = new Asignacion();
            var asignaciones: Array<Asignacion> = [];
            asignacion.codPanel = "CP-7";
            asignacion.codCatador = "1701423473";
            asignacion.codCafe = "CF-4";
            asignacion.cantidad = 0;
            asignacion.codCatacion = "CT-5";
            asignaciones.push(asignacion)
            serviciosserviceTested.postAsignacion(asignaciones)
                .subscribe((res) => {
                },
                    (err) => expect(err.error).toEqual("La cantidad a catar no puede ser menor o igual a cero")
                );
            const req = httpMock.expectOne(API_URI);
            expect(req.request.method).toBe('POST');
            req.flush("La cantidad a catar no puede ser menor o igual a cero");
        }));

        it('Intentar asignar a un catador con la cantidad de veces en vacio', inject([HttpTestingController, ServiciosService], (httpMock: HttpTestingController, serviciosserviceTested: ServiciosService) => {
            const API_URI = 'https://webapicatafex.azurewebsites.net/api/ApiAsignarCatador/asignar'
            var asignacion = new Asignacion();
            var asignaciones: Array<Asignacion> = [];
            asignacion.codPanel = "CP-7";
            asignacion.codCatador = "1701423473";
            asignacion.codCafe = "CF-4";
            asignacion.cantidad = null;
            asignacion.codCatacion = "CT-5";
            asignaciones.push(asignacion)
            serviciosserviceTested.postAsignacion(asignaciones)
                .subscribe((res) => {
                },
                    (err) => expect(err.error).toEqual("La cantidad a catar no puede ser menor o igual a cero")
                );
            const req = httpMock.expectOne(API_URI);
            expect(req.request.method).toBe('POST');
            req.flush("La cantidad a catar no puede ser menor o igual a cero");
        }));
    });
});