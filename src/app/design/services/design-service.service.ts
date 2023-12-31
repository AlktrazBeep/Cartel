import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import * as g from '../globals/format-globals';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {
  public titulo:BehaviorSubject<string>=new BehaviorSubject<string>("");//INICIALMENTE VACIO

  public formatoActual:BehaviorSubject<number>=new BehaviorSubject<number>(1); //CAMBIAR A 1

  //COLORES
  public bgActual:BehaviorSubject<string>=new BehaviorSubject<string>("#FFFFFF");
  public bgTituloActual:BehaviorSubject<string>=new BehaviorSubject<string>("#BDBDBD");
  
  public bgSubActual:BehaviorSubject<string>=new BehaviorSubject<string>("#7C4DFF");//fondo subtitulos
  public txtSubActual:BehaviorSubject<string>=new BehaviorSubject<string>("white");//texto subtitulos
  public apBgActual:BehaviorSubject<string>=new BehaviorSubject<string>("white");//fondo apartado



  constructor() { }
  //LOS SIGUIENTES SERVICIOS SE ENCARGAN SOLO DE MANEJAR TODO LO RESPECTIVO A LAS HERRAMIENTAS COLOR Y FORMATO

  //CAMBIA EL VALOR DEL FORMATO ACTUAL
  cambiarFormato(formato:number){
    this.formatoActual.next(formato);
  }
  //RETORNA EL VALOR DEL FORMATO ACTUAL INDISPENSABLE PARA LA HORA DE GUARDAR
  getFormatoActual():number{
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
  //CAMBIA EL FONDO DE SUBTITULOS
  cambiarBGSub(bg:string){
    g.changeSubBgColor(bg);//SE ACTUALIZA EN GLOBALS
    this.bgSubActual.next(bg);
  }
  cambiarTxtSub(bg:string){
    g.changeSubTxtColor(bg);//SE ACTUALIZA EN GLOBALS
    this.txtSubActual.next(bg);
  }
  cambiarBgAp(bg:string){
    g.changeApBgColor(bg);//SE ACTUALIZA EN GLOBALS
    this.apBgActual.next(bg);
  }

  cambiarTitulo(txt:string){
    this.titulo.next(txt);
  }
  //NOMBRE DEL PROYECTO QUE SE GUARDARA
  getTitulo():string{
    return this.titulo.getValue();
  }
}
