import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';

import * as g from '../../globals/format-globals';
import { ColorBodyArray } from '../../Interfaces/format.interface';

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
  public titulo_color=g.titulo_color;//ESTOS SON INDEPENDIENTES IGUALES EN CADA UNA


  //CON EL FIN DE  NO MANDAR 3 VARIABLES INDEPENDIENTES DE COLOR A LOS CHILD SE ENVIA ESTE ARRAY
  //INICIALIZaCION DE LOS COLORES 
  public colors:ColorBodyArray={
    sub_bg: g.sub_bg_color,//COLORES DE SUBTITULO
    sub_txt: g.sub_txt_color,
    ap_bg : g.ap_bg_color,//COLOR DE APARTADOS,
  };

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

   //COLORES PARA SUBTITULOS YTEXTO Y FONDO

   this.designService.bgSubActual.subscribe(
    bgSub=>{
      this.colors.sub_bg=bgSub;
    }
   );
   this.designService.txtSubActual.subscribe(
    txtSub=>{
      this.colors.sub_txt=txtSub;
    }
   );
  }

}
