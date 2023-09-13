import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {
  public formatoActual:BehaviorSubject<number>=new BehaviorSubject<number>(1);


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
}
