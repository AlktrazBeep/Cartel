import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageArray'
})

export class ImageArrayPipe implements PipeTransform {
    transform(array: string[]): string[] {
        
        if(array.length==0){
            return [            
            "./assets/no-image.jpeg",
            "./assets/no-image.jpeg",
            "./assets/no-image.jpeg",
            ]
        }else{
            //SI SI FUNCIONA EL ARRAY
            
            return array;
        }
    }
}