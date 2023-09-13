import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';

@Component({
  selector: 'app-editable-page',
  templateUrl: './editable-page.component.html',
  styleUrls: ['./editable-page.component.css']
})
export class EditablePageComponent implements OnInit{
  public formato:number=1;//CONTIENE EL NUMERO DE FORMATO QUE SE OCUPARA
  
  //INYECCION DE SERVICIOS
  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SE SUSCRIBE AL FORMATO ACTUAL
    this.designService.formatoActual.subscribe(
      form=>{
        this.formato=form;
        console.log(this.formato);
      }
    );
  }

}
