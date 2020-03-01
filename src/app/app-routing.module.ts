import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { HomeComponent } from './components/home/home.component';

import { PanelListComponent } from './components/panel-list/panel-list.component';
import { PanelFormComponent } from './components/panel-form/panel-form.component'
import { CatadoresListComponent } from './components/catadores-list/catadores-list.component';
import { CatadorFormComponent } from './components/catador-form/catador-form.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },

  {
    path: 'form',
    component: EventosFormComponent
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'eventos',
    component: EventosListComponent
  }
  , {
    path: 'eventos/:id/panel/:id',
    component: CatadorFormComponent
  }, {
    path: 'eventos/:id/panel/:id/2',
    component: PanelFormComponent
  },
  {
    path: 'eventos/:id/panel',
    component: PanelListComponent
  },
  {
    path: 'catadores',
    component: CatadoresListComponent
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
