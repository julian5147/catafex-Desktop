import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CatadorFormComponent } from './components/catador-form/catador-form.component';
import { CatadoresListComponent } from './components/catadores-list/catadores-list.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { PanelListComponent } from './components/panel-list/panel-list.component';
import { ServiciosService } from './services/servicios.service'


import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AsignarComponent } from './components/asignar/asignar.component';
import { PDFComponent } from './components/pdf/pdf.component';
import { HabilitarComponent } from './components/habilitar/habilitar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CatadorFormComponent,
    CatadoresListComponent,
    EventosListComponent,
    PanelListComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AsignarComponent,
    PDFComponent,
    HabilitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
