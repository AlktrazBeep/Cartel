import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { EditablePageComponent } from './pages/editable-page/editable-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormatOneComponent } from './components/format-one/format-one.component';
import { FormatTwoComponent } from './components/format-two/format-two.component';
import { FormatThreeComponent } from './components/format-three/format-three.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  
    EditablePageComponent,
       LayoutPageComponent,
       FormatOneComponent,
       FormatTwoComponent,
       FormatThreeComponent
  ],
  imports: [
    CommonModule,
    DesignRoutingModule,
    SharedModule
  ]
})
export class DesignModule { }
