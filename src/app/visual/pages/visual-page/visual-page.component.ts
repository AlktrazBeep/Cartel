import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartel } from 'src/app/design/Interfaces/format.interface';

@Component({
  selector: 'app-visual-page',
  templateUrl: './visual-page.component.html',
  styleUrls: ['./visual-page.component.css']
})
export class VisualPageComponent implements OnInit,AfterViewInit{
  @ViewChild('divID') divID!: ElementRef;

  public cartel!:Cartel;
  //RECIBIR INFO DEL ID
  constructor(private route:ActivatedRoute,private router:Router){}

  ngAfterViewInit(): void {
    if(this.divID){
      console.log("hola");
      
      this.divID.nativeElement.innerHTML = this.cartel.body.intro;
    }
  }

  ngOnInit(): void {
    //OBTENIENDO PARAMETROS
    this.route.params.subscribe(
      params=>{
        //SE OBTIENE CARTEL Y CONVIERTE A SU OBJETO
        //CUANDO SE OBTIENEN PARAMS POR PREVIEW
        try{
          this.cartel=JSON.parse(atob(params["id"])) as Cartel;
        }catch(e){
          console.log(`error: ${e}`);
          //SI ESTA MAL LA ENVIA AL ERROR
          this.router.navigate(['../404']);
        }
        
      }
    );  
  }
}
