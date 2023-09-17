import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { VisualPageComponent } from './pages/visual-page/visual-page.component';
import { Error404PageComponent } from '../shared/pages/error404-page/error404-page.component';

//localhost/preview/id_del_cartel
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'preview/:id', component: VisualPageComponent}, //PUEDE ENTRAR ID QUE ES EL CARTEL EN LA DB
      { path: 'cartel/:id', component: VisualPageComponent}, //PUEDE ENTRAR ID DE LA BASE
      // { path: '', pathMatch: 'full', component: Error404PageComponent},//PUEDE ENTRAR VACIO INCLUSIVE
      // { path: '**', redirectTo: ''},//CUANDO SEA CUALQUIER COSA
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualRoutingModule { }
