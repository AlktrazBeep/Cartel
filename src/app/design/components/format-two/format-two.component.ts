import { Component, Input, OnInit } from '@angular/core';

import * as g from '../../globals/format-globals';
import { DesignServiceService } from '../../services/design-service.service';
import { BodyCartel, ColorBodyArray, MediaCartel } from '../../Interfaces/format.interface';


@Component({
  selector: 'app-format-two',
  templateUrl: './format-two.component.html',
  styleUrls: ['./format-two.component.css']
})
export class FormatTwoComponent implements OnInit{
  //COLORES HEREDADOS
  @Input() colors:ColorBodyArray={
    sub_bg: '',
    sub_txt: '',
    ap_bg: '',
    title_bg: ''
  };
  //SECCIONES DEL CARTEL HEREDADOS
  
  @Input() bodyCartel!:BodyCartel; //NO PUEDE SER NULO
  @Input() mediaCartel!:MediaCartel; //NO PUEDE SER NULO

  public g=g;//VARIABLE GLOBAL
  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SUBSCRIPCION DE SERVICIOS
    
    
  }
}
