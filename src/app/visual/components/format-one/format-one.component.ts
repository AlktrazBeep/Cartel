import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Cartel } from 'src/app/design/Interfaces/format.interface';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})
export class FormatOneComponent implements AfterViewInit {
  
  //PARTE IZQUIERDA
  @ViewChild("introCont") intro!:ElementRef;
  @ViewChild("objCont") obj!:ElementRef;
  @ViewChild("metoCont") meto!:ElementRef;
  
  //MEDIO
  @ViewChild("resCont") res!:ElementRef;
  @ViewChild("grap1") grap1!:ElementRef;
  @ViewChild("grap2") grap2!:ElementRef;
  
  //PARTE DERECHA
  @ViewChild("conCont") con!:ElementRef;
  @ViewChild("refCont") ref!:ElementRef;
  @ViewChild("datosCont") datos!:ElementRef;
  @ViewChild("agraCont") agra!:ElementRef;
  
  
  @Input() cartel!:Cartel;
  
  ngAfterViewInit(): void {
    //SI TODOS ESTAN SE ASIGNAN
    if(this.intro && this.obj && this.meto && 
      this.res && this.con && this.ref && 
      this.datos && this.agra){
      this.intro.nativeElement.innerHTML = this.cartel.body.intro;
      this.obj.nativeElement.innerHTML = this.cartel.body.objetivos;
      this.meto.nativeElement.innerHTML = this.cartel.body.metodologia;
      this.res.nativeElement.innerHTML = this.cartel.body.resultados;
      this.con.nativeElement.innerHTML = this.cartel.body.conclusion;
      this.ref.nativeElement.innerHTML = this.cartel.body.referencias;
      this.datos.nativeElement.innerHTML = this.cartel.body.datos;
      this.agra.nativeElement.innerHTML = this.cartel.body.agradecimientos;
    }
  }
}
