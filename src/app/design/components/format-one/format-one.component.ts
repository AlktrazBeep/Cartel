import { Component, Input, OnInit } from '@angular/core';

import * as g from '../../globals/format-globals';
import { DesignServiceService } from '../../services/design-service.service';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})
//TODO: HACER FORMATOS Y QUE COMPARTAN INFO
export class FormatOneComponent implements OnInit{
  @Input() bg_sub:string="#FFFFFF";
  
  @Input() aux:any;

  constructor(private designService:DesignServiceService){}

  ngOnInit(): void {
    //SUBSCRIPCION DE SERVICIOS
    
    
  }


}
