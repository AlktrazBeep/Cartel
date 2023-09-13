import { Component } from '@angular/core';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})
//TODO: HACER FORMATOS Y QUE COMPARTAN INFO
export class FormatOneComponent {
  public apikey:string="dyal385wlvsx071fkvr2nzs6llostwantfqy5z03rd1zehf2";
  //CONSTANTES INICIALES
  titulo_init={
    height: 50,
    with: 30,
    menubar: false,
    inline:true,
    plugins: [
      'autoresize'
    ],
    autoresize_on_init: false,
    toolbar:
      'styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
  };
}
