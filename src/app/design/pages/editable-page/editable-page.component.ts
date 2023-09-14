import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';

import * as g from '../../globals/format-globals';

@Component({
  selector: 'app-editable-page',
  templateUrl: './editable-page.component.html',
  styleUrls: ['./editable-page.component.css']
})
export class EditablePageComponent implements OnInit{
  public formato:number=1;//CONTIENE EL NUMERO DE FORMATO QUE SE MOSTRARÁ POR DEFAULT


  public apikey:string="dyal385wlvsx071fkvr2nzs6llostwantfqy5z03rd1zehf2";

  //CONSTANTES INICIALES PARA EL FORMATO EDITABLE
  public titulo_init=g.titulo_init;

  //COLOR DE FONDO INICIAL Y VARIABLE DE CAMBIO
  public bg_color=g.bg_color;
  public titulo_color=g.titulo_color;
  public sub_color=g.sub_color;
  //INYECCION DE SERVICIOS
  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SE SUSCRIBE AL FORMATO ACTUAL
    this.designService.formatoActual.subscribe(
      form=>{
        this.formato=form;
        console.log(this.formato);
      }
    );
    //-------------------------SUBSCRIPCION A COLORES
    //BG
   this.designService.bgActual.subscribe(
    bg=>{
      this.bg_color=bg;
    }
   );
  
   //BG DE TITULO

   this.designService.bgTituloActual.subscribe(
    bgTitulo=>{
      this.titulo_color=bgTitulo;
    }
   );
  }

}
