import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Cartel } from 'src/app/design/Interfaces/format.interface';

@Component({
  selector: 'app-visual-page',
  templateUrl: './visual-page.component.html',
  styleUrls: ['./visual-page.component.css']
})
export class VisualPageComponent implements OnInit,AfterViewInit{
  @ViewChild('tituloContent') titulo!: ElementRef;

  public cartel!:Cartel;
  //RECIBIR INFO DEL ID
  constructor(private route:ActivatedRoute,private router:Router){}

  ngAfterViewInit(): void {
    if(this.titulo){
      this.titulo.nativeElement.innerHTML = this.cartel.title;
    }
  }

  ngOnInit(): void {
    //OBTENIENDO PARAMETROS
    this.route.params.subscribe(
      params=>{
        //SE OBTIENE CARTEL Y CONVIERTE A SU OBJETO
        //CUANDO SE OBTIENEN PARAMS POR PREVIEW
        try{
          const url=this.router.url;
          

          if(url.includes("preview")){
            this.cartel=JSON.parse(decodeURIComponent(atob(params["id"]))) as Cartel; //SI ES POR PREVIEW OBTIENE COMO UN OBJETO 
            // console.log(this.cartel);
          }
          if(url.includes("cartel")){
            //SE OBTIENE POR BASE DE DATOS
          }

        }catch(e){
          console.log(`error: ${e}`);
          //SI ESTA MAL LA ENVIA AL ERROR
          this.router.navigate(['../404']);
        }
        
      }
    );
    
    
   
  }
}
