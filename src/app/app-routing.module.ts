import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';


//localhost:4200/
const routes: Routes = [
  {
    path: 'editar',
    loadChildren: ()=> import('./design/design.module').then(m => m.DesignModule)
  },
  {
    path: 'ver',
    loadChildren: ()=> import('./visual/visual.module').then(m => m.VisualModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
