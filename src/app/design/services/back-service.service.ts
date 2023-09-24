import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cartel } from '../Interfaces/format.interface';


import * as g from '../globals/format-globals';
import { Res } from '../Interfaces/api.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackServiceService {


  public signal_to_catch:BehaviorSubject<string>=new BehaviorSubject<string>("");//EMITE SEÑAL

  constructor(private router:Router,
    private http:HttpClient) { }

  //SE OBTIENE LO QUE HAY DEL CARTEL, ENVIA UNA SEÑAL PARA QUE LA ESCUCHE EDITABLE Y OBTENER LOS DATOS ESENCIALES
  //SOLO ENVIA SEÑAL
  catchData(value:string){
    this.signal_to_catch.next(value);
  }

  //SERVICIO QUE REVISA LOS DATOS Y DE SER COMPLETOS LOS ENVÍA AL PREVIEW
  //EN EL id MANDA EL CARTEL EN BTOA 
  preview(cartel:Cartel){
    //SE CONVIERTE A BASE 64 EL CARTEL PARA ENVIARLO
    // let cartel_b64=btoa(JSON.stringify(cartel));
    let cartel_b64=btoa(encodeURIComponent(JSON.stringify(cartel)));
    //ENVIA A  /PREVIEW/CARTEL... 
    const url = this.router.createUrlTree(['../ver/preview']);
    window.open(url.toString().replace("/ver","#/ver")+"/"+cartel_b64, '_blank');
  }

  //CREAR NUEVO CARTEL RECIBE SOLO EL NOMBRE
  newCartel(name:string):Observable<Res>{
    //ENVIA EL NOMBRE AL SERVICIO
    return this.http.post<Res>(`${g.API_CORE}nuevo_cartel.php`,{ name: name });
  }
  //GUARDAR CARTEL (ACTUALIZAR) RECIBE EL NOMBRE Y EL CARTEL
  saveCartel(name:string,cartel:Cartel):Observable<Res>{
    let cartel_b64=btoa(encodeURIComponent(JSON.stringify(cartel)));
    
    return this.http.post<Res>(`${g.API_CORE}update_cartel.php`,{
      name: name,
      cartel:cartel_b64
    });
  }
  //OBTENER CARTELES NO RECIBE NADA

  //OBTENER CARTEL POR ID RECIBE SOLO UN NUMERO Y SE OBTIENE UNA RESPUESTA O UN ARRAY DE CARTELES
  getCartel(id:string,byId:string):Observable<any>{
    // console.log(
    //     {id: id,
    //   byId: byId}
    // );
    let body={
      id: id,
      byId: byId
    };
    
    return this.http.post<any>(`${g.API_CORE}get_cartel.php`,
    body);
  }
  //PONER EN FINALIZADO SOLO RECIBE EL NOMBRE
  finalizeCartel(name:string):Observable<Res>{
    return this.http.post<Res>(`${g.API_CORE}finalizar_cartel.php`,{
      name: name
    });
  }
}
