import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualRoutingModule } from './visual-routing.module';
import { VisualPageComponent } from './pages/visual-page/visual-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
  
    VisualPageComponent,
       LayoutPageComponent
  ],
  imports: [
    CommonModule,
    VisualRoutingModule
  ]
})
export class VisualModule { }
