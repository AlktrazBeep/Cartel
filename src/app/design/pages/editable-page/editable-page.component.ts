import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';

import * as g from '../../globals/format-globals';
import { BodyCartel, ColorBodyArray } from '../../Interfaces/format.interface';

@Component({
  selector: 'app-editable-page',
  templateUrl: './editable-page.component.html',
  styleUrls: ['./editable-page.component.css']
})
export class EditablePageComponent implements OnInit{
  public formato:number=1;//CONTIENE EL NUMERO DE FORMATO QUE SE MOSTRARÁ POR DEFAULT

  public g=g; //VAR GLOBAL
  

  

  //CON EL FIN DE  NO MANDAR 3 VARIABLES INDEPENDIENTES DE COLOR A LOS CHILD SE ENVIA ESTE ARRAY
  //INICIALIZaCION DE LOS COLORES 
  public colors:ColorBodyArray={
    sub_bg: g.sub_bg_color,//COLORES DE SUBTITULO
    sub_txt: g.sub_txt_color,
    ap_bg : g.ap_bg_color,//COLOR DE APARTADOS,
  };
  // INICIALIZACION DEL CONTENIDO DEL FORMATO (BODY CARTEL)
  public bodyCartel:BodyCartel=g.bodyCartel;
  
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
      this.g.bg_color=bg;
    }
   );
  
   //BG DE TITULO

   this.designService.bgTituloActual.subscribe(
    bgTitulo=>{
      this.g.titulo_color=bgTitulo;
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
   //COLOR PARA APARTADOS
   this.designService.apBgActual.subscribe(
    bgAp=>{
      this.colors.ap_bg=bgAp;
    }
   );
  }

}
