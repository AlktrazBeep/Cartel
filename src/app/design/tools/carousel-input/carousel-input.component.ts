import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel-input.component.html',
  styleUrls: ['./carousel-input.component.css']
})
export class CarouselInputComponent {
  @Input() carousel:Array<string>=[];

  //VIENE DEL INPUT DEL FORM
  public link:string="";


  onClick(){
    if(this.link.length==0) return;
    //SE AGREGA LINK AL CARROUSEL
    this.carousel.push(this.link);
    console.log(this.carousel);
  }
  onRemove(i:number){
    this.carousel.splice(i,1);
  }
}
