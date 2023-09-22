import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';


import * as g from '../../globals/format-globals';
import { BackServiceService } from '../../services/back-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {
  public name:string="Ejemplo";
  //VALORES POR DEFAULT DEL COLOR INICIAL
  public bg_color=g.bg_color;
  public titulo_color=g.titulo_color;

  public sub_bg_color=g.sub_bg_color;
  public sub_txt_color=g.sub_txt_color;
  public ap_bg_color=g.ap_bg_color;

  // INYECCION DE SERVICIOS
  constructor(
      private designService:DesignServiceService,
      private backService:BackServiceService,
      private router:Router){}

  ngOnInit(): void {
    //RECIBE EL TITULO QUE ANERIORMENTE SE METIO
    this.designService.titulo.subscribe(
      titulo=>{
        if(titulo==""){
          this.router.navigate([""]);
          return;
        }
        this.name=titulo;
      }
    );
  }

  

  //FUNCIONES QUE USAN LOS CONTROLADORES PARA EMITIR EL EVENTO
  cambiarFormato(formato:number){
    this.designService.cambiarFormato(formato);
  }

  //PARA CAMBIAR COLORES

  //TITULO Y FONDO PRINCIPAL
  cambiarBgTitulo(event:Event){
    this.designService.cambiarBgTitulo((event.target as HTMLInputElement).value);
  }
  cambiarBg(event:Event){
    this.designService.cambiarBg((event.target as HTMLInputElement).value);
  }

  //SUBTITULOS
  cambiarBgSub(event:Event){
    this.designService.cambiarBGSub((event.target as HTMLInputElement).value);
  }
  cambiarTxtSub(event:Event){
    this.designService.cambiarTxtSub((event.target as HTMLInputElement).value);
  }
  //APARTADOS
  cambiarBgAp(event:Event){
    this.designService.cambiarBgAp((event.target as HTMLInputElement).value);
  }

  //FUNCIONES BACKEND

  toPreview(){ 
    // SOLO MANDA SEÑAL
    this.backService.catchData("preview");
  }

  toSave(){
    this.backService.catchData("save");
  }
  toFinalize(){
    this.backService.catchData("finalize");
  }



}
