import { Component, Input, OnInit } from '@angular/core';

import * as g from '../../globals/format-globals';
import { DesignServiceService } from '../../services/design-service.service';
import { BodyCartel, ColorBodyArray, MediaCartel } from '../../Interfaces/format.interface';

@Component({
  selector: 'app-format-three',
  templateUrl: './format-three.component.html',
  styleUrls: ['./format-three.component.css']
})
export class FormatThreeComponent implements OnInit{
  
  @Input() colors:ColorBodyArray={
    sub_bg: '',
    sub_txt: '',
    ap_bg: '',
    title_bg: ''
  };
  
  @Input() bodyCartel!:BodyCartel; //NO PUEDE SER NULO
  public g=g;//VARIABLE GLOBAL
  
  @Input() mediaCartel!:MediaCartel; //NO PUEDE SER NULO
  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SUBSCRIPCION DE SERVICIOS
    
    
  }
}
