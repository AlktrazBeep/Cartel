import { Component } from '@angular/core';
import { DesignServiceService } from '../../services/design-service.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  // INYECCION DE SERVICIOS
  constructor(private designService:DesignServiceService){}

  cambiarFormato(formato:number){
    this.designService.cambiarFormato(formato);
  }
}
