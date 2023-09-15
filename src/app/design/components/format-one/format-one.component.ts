import { Component, Input, OnInit } from '@angular/core';

import * as g from '../../globals/format-globals';
import { DesignServiceService } from '../../services/design-service.service';
import { ColorBodyArray } from '../../Interfaces/format.interface';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})
//TODO: HACER FORMATOS Y QUE COMPARTAN INFO
export class FormatOneComponent implements OnInit{
  //LOS COLORES SE HEREDAN DE EDITABLE PAGE COMPONENT PARA QUE SOLO LOS MUESTRE AQUÍ
  @Input() colors:ColorBodyArray={
    sub_bg: '',
    sub_txt: '',
    ap_bg: ''
  };

  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SUBSCRIPCION DE SERVICIOS
    
    
  }


}
