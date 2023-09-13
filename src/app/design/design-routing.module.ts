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
      { path: ':id', component: EditablePageComponent },
      { path: '', component: EditablePageComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
