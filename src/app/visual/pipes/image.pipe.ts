import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'image'
})

export class ImagePipe implements PipeTransform {
    transform(src: string): string {
        // FILTROS
        //SI ENVIARON IMAGENES Y NO CADENA VACÍA
      if(src && src!=""){
        //PONE LA IMAGEN QUE EXISTE
        return `
            background-image: url('${src}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        `
      }else{
        //PONE UNA IMAGEN POR DEFAULT DE LO CONTRARIO
        return `
        background-image: url('./assets/no-image.jpeg');
        background-size: cover;
        background-position: center;
        `
      }
    }
}