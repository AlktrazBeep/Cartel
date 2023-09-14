import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import * as g from '../globals/format-globals';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {
  public formatoActual:BehaviorSubject<number>=new BehaviorSubject<number>(1);

  //COLORES
  public bgActual:BehaviorSubject<string>=new BehaviorSubject<string>("#FFFFFF");
  public bgTituloActual:BehaviorSubject<string>=new BehaviorSubject<string>("#BDBDBD");


  constructor() { }
  //LOS SIGUIENTES SERVICIOS SE ENCARGAN SOLO DE MANEJAR TODO LO RESPECTIVO A LAS HERRAMIENTAS COLOR Y FORMATO

  //CAMBIA EL VALOR DEL FORMATO ACTUAL
  cambiarFormato(formato:number){
    this.formatoActual.next(formato);
  }
  //RETORNA EL VALOR DEL FORMATO ACTUAL INDISPENSABLE PARA LA HORA DE GUARDAR
  getFormatoActual(){
    return this.formatoActual.getValue();
  }

  //-----------------CAMBIO DE COLORES
  //CAMBIA EL COLOR DE FONDO DEL LIENZO
  cambiarBg(bg:string){
    g.changeBgColor(bg);//SE ACTUALIZA EN GLOBALS
    this.bgActual.next(bg);
  }
  //CAMBIA EL COLOR DEL FONDO DEL TITULO
  cambiarBgTitulo(bg:string){
    g.changeTituloColor(bg);//SE ACTUALIZA EN GLOBALS
    this.bgTituloActual.next(bg);
  }
}