import { Component } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';


import * as g from '../../globals/format-globals';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  //VALORES POR DEFAULT DEL COLOR INICIAL
  public bg_color=g.bg_color;
  public titulo_color=g.titulo_color;
  // INYECCION DE SERVICIOS
  constructor(private designService:DesignServiceService){}

  

  //FUNCIONES QUE USAN LOS CONTROLADORES PARA EMITIR EL EVENTO
  cambiarFormato(formato:number){
    this.designService.cambiarFormato(formato);
  }

  cambiarBgTitulo(event:Event){
    this.designService.cambiarBgTitulo((event.target as HTMLInputElement).value);
  }
  cambiarBg(event:Event){
    this.designService.cambiarBg((event.target as HTMLInputElement).value);
  }
}
