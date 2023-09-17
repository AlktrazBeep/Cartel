import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent {
  @Input() imageArray!:string[];

}
