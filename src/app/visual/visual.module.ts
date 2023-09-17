import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualRoutingModule } from './visual-routing.module';
import { VisualPageComponent } from './pages/visual-page/visual-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormatOneComponent } from './components/format-one/format-one.component';
import { FormatTwoComponent } from './components/format-two/format-two.component';
import { FormatThreeComponent } from './components/format-three/format-three.component';
import { ImagePipe } from './pipes/image.pipe';
import { CarouselComponent } from './tools/carousel/carousel.component';
import { ImageArrayPipe } from './pipes/imageArray.pipe';


@NgModule({
  declarations: [
  
    VisualPageComponent,
       LayoutPageComponent,
       FormatOneComponent,
       FormatTwoComponent,
       FormatThreeComponent,
       ImagePipe,
       ImageArrayPipe,
       CarouselComponent
  ],
  imports: [
    CommonModule,
    VisualRoutingModule
  ]
})
export class VisualModule { }
