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
      { path: ':id', component: VisualPageComponent}, //PUEDE ENTRAR ID
      { path: '', pathMatch: 'full', component: VisualPageComponent}//PUEDE ENTRAR VACIO INCLUSIVE
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualRoutingModule { }
