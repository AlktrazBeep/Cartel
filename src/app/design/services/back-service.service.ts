import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Cartel } from '../Interfaces/format.interface';


import * as g from '../globals/format-globals';

@Injectable({
  providedIn: 'root'
})
export class BackServiceService {


  public signal_to_catch:BehaviorSubject<string>=new BehaviorSubject<string>("");//EMITE SEÑAL

  constructor(private router:Router) { }

  //SE OBTIENE LO QUE HAY DEL CARTEL, ENVIA UNA SEÑAL PARA QUE LA ESCUCHE EDITABLE Y OBTENER LOS DATOS ESENCIALES
  //SOLO ENVIA SEÑAL
  catchData(value:string){
    this.signal_to_catch.next(value);
    // console.log("catch data");
    // this.signal_to_catch.next(value).then();
    // console.log("catch data2");
  }

  //SERVICIO QUE REVISA LOS DATOS Y DE SER COMPLETOS LOS ENVÍA AL PREVIEW
  //EN EL id MANDA EL CARTEL EN BTOA 
  preview(cartel:any){
    //SE CONVIERTE A BASE 64 EL CARTEL PARA ENVIARLO
    let cartel_b64=btoa(JSON.stringify(cartel));
    //ENVIA A  /PREVIEW/CARTEL... 
    const url = this.router.createUrlTree(['../preview']);
    window.open(url.toString()+"/"+cartel_b64, '_blank');
  }

  

}
