import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule
  ],
  exports:[
    Error404PageComponent,
    EditorModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
