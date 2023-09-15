import { Component, Input, OnInit } from '@angular/core';

import * as g from '../../globals/format-globals';
import { DesignServiceService } from '../../services/design-service.service';
import { ColorBodyArray } from '../../Interfaces/format.interface';


@Component({
  selector: 'app-format-two',
  templateUrl: './format-two.component.html',
  styleUrls: ['./format-two.component.css']
})
export class FormatTwoComponent implements OnInit{
  
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
