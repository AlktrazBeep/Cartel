import { JsonPipe } from '@angular/common';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Res } from 'src/app/design/Interfaces/api.interface';
import { Cartel } from 'src/app/design/Interfaces/format.interface';
import { BackServiceService } from 'src/app/design/services/back-service.service';

@Component({
  selector: 'app-visual-page',
  templateUrl: './visual-page.component.html',
  styleUrls: ['./visual-page.component.css']
})
export class VisualPageComponent implements OnInit,AfterViewChecked{
  @ViewChild('tituloContent',{ static: false }) titulo!: ElementRef;

  public cartel!:Cartel;
  //RECIBIR INFO DEL ID
  constructor(private route:ActivatedRoute,
    private router:Router,
    private backService:BackServiceService){}
  
    

  ngAfterViewChecked(): void {
    if(this.titulo){
      this.titulo.nativeElement.innerHTML = this.cartel.title;
      console.log(this.titulo+" checked1 "+this.cartel.title); 
    }
    // console.log(this.titulo+" checked "+this.cartel.title); 
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
            let id_cartel:string=params["id"];
            let byId:string="true";
            // console.log(`id del cartel ${id_cartel}`)
            this.backService.getCartel(id_cartel,byId).subscribe(
              {
                next:res=>{

                if(res.error){
                  console.log(`ERROR`);
                }else{
                  // console.log(`BIEN ${JSON.stringify(res)}  ${id_cartel} "true"`);
                  this.cartel=JSON.parse(decodeURIComponent(atob(res.res[0].cartel_encoded))) as Cartel; //SI ES POR PREVIEW OBTIENE COMO UN OBJETO 
                  console.log(this.titulo+" subscribe "+this.cartel.title); 

                }
              },
              error: (error)=>{
                console.log("Hubo error");
              }
            }
            );

          }

        }catch(e){
          console.log(`error: ${e}`);
          //SI ESTA MAL LA ENVIA AL ERROR
          this.router.navigate(['/404']);
        }
        
      }
    );
    
    
   
  }
}
