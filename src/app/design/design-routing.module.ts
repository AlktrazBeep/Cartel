import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EditablePageComponent } from './pages/editable-page/editable-page.component';
//localhost:4200/editar
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'nuevo', component: EditablePageComponent }, //CARTELES NUEVOS
      { path: 'cartel/:id', component: EditablePageComponent },//CARTELES QUE YA EXISTEN 
      { path: '', redirectTo: 'nuevo', pathMatch: 'full' },//CUALQUIER COSA LA MANDA A 404
      { path: '**', redirectTo: '/404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
