import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';
import { FormBuilder } from '@angular/forms';

import * as g from '../../globals/format-globals';
import { BodyCartel, Cartel, ColorBodyArray, MediaCartel } from '../../Interfaces/format.interface';
import { BackServiceService } from '../../services/back-service.service';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-editable-page',
  templateUrl: './editable-page.component.html',
  styleUrls: ['./editable-page.component.css']
})
export class EditablePageComponent implements OnInit{
  
  public titulo_cont:string="<p class='text-center'>Escribe tu título</p>";


  public formato:number=1;//CONTIENE EL NUMERO DE FORMATO QUE SE MOSTRARÁ POR DEFAULT

  public g=g; //VAR GLOBAL
  

  

  //CON EL FIN DE  NO MANDAR 3 VARIABLES INDEPENDIENTES DE COLOR A LOS CHILD SE ENVIA ESTE ARRAY
  //INICIALIZaCION DE LOS COLORES 
  public colors:ColorBodyArray={
    bg: g.bg_color,
    sub_bg: g.sub_bg_color,//COLORES DE SUBTITULO
    sub_txt: g.sub_txt_color,
    ap_bg : g.ap_bg_color,//COLOR DE APARTADOS,
    title_bg : g.titulo_color,//COLOR DE titulo,
  };
  // INICIALIZACION DEL CONTENIDO DEL FORMATO (BODY CARTEL)
  public bodyCartel:BodyCartel=g.bodyCartel;
  
  public mediaCartel:MediaCartel=g.mediaCartel; //NO PUEDE SER NULO

  public cartel:Cartel=g.cartel;
  //INYECCION DE SERVICIOS
  constructor(
    private designService:DesignServiceService,
    private backService:BackServiceService,
    ){}

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
      this.colors.bg=bg;//CAMBIE ESTO
    }
   );
  
   //BG DE TITULO

   this.designService.bgTituloActual.subscribe(
    bgTitulo=>{
      // this.g.titulo_color=bgTitulo;//CAMBIE ESTO
      this.colors.title_bg=bgTitulo;
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


    //----------------SUSCRIPCION A CATCH
    this.backService.signal_to_catch.subscribe(
      signal=>{
        console.log(this.cartel);
        if(signal=="") return;
        this.cartel.formato=this.formato.toString();
        this.cartel.body=this.bodyCartel;
        this.cartel.colors=this.colors;
        this.cartel.title=this.titulo_cont;
        if(this.mediaCartel.grafica1.length==0)
          this.mediaCartel.grafica1="";
        if(this.mediaCartel.grafica2.length==0)
          this.mediaCartel.grafica2="";

        this.cartel.media=this.mediaCartel;
        console.log(this.cartel);

        //DEPENDIENDO EL DESTINO DE LA SEÑAL SE ENVIA A UN METODO DE SERVICIO DIFERENTE
        if(signal=="preview"){
              this.backService.preview(this.cartel);
        }

        //CREAR MODAL CUANDO SE ESTE ENVIANDO SAVE Y FINALIZE
        if(signal=="save"){
          this.backService.saveCartel(this.designService.getTitulo(),this.cartel).subscribe(
            res=>{
              if(res.res)
                alert(`${res.res}`);
              else
                alert(`${res.error}`);

            },
            error=>{
              alert(`Ocurrió un error`);
            }
          );
        }
        
        if(signal=="finalize"){
          this.backService.finalizeCartel(this.designService.getTitulo()).subscribe(
            res=>{
              if(res.res)
                alert(`${res.res}`);
              else
                alert(`${res.error}`);

            },
            error=>{
              alert(`Ocurrió un error`);
            }
          );
        }
      }
    );
  }

}
