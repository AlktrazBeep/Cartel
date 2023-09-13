import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    EditorModule
  ],
  exports:[
    Error404PageComponent,
    EditorModule
  ]
})
export class SharedModule { }
