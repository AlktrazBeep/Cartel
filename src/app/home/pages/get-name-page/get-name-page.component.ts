import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Res } from 'src/app/design/Interfaces/api.interface';
import { BackServiceService } from 'src/app/design/services/back-service.service';
import { DesignServiceService } from 'src/app/design/services/design-service.service';

@Component({
  selector: 'app-get-name-page',
  templateUrl: './get-name-page.component.html',
  styleUrls: ['./get-name-page.component.css']
})
export class GetNamePageComponent {
  public form:FormGroup=this.fb.group(
    {
      name: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(40)],]
    }
  );

  public submiting:boolean=false;
  public errorBack:string="";

  constructor(private fb:FormBuilder, 
    private backService:BackServiceService,
    private designService:DesignServiceService,
    private router:Router){}

  onSubmit(){
    this.submiting=true;
    //SI ESTA MAL MUESTRA ERRORES
    if(this.form.invalid){
      this.form.markAllAsTouched();
      
      this.submiting=false;
      return;
    }
    // console.log("submited")
    this.backService.newCartel(this.form.get('name')!.value).subscribe(
      (res:Res)=>{
        console.log("hecho")
        if(res.res){
          //IR A EDITAR
          this.designService.cambiarTitulo(this.form.get('name')!.value);
          this.router.navigate(['/editar/nuevo']);
          this.submiting=false;
        }else if(res.error){
          this.errorBack=res.error;
          this.submiting=false;
          return;
        }

      }
    );
  }
  isValidField(field:string):boolean | null{
    
    return this.form.controls[field].errors
        && this.form.controls[field].touched;
  }

  getFieldError(field:string):string | null{
    if(!this.form.controls[field] ) return null; //SI NO EXISTE ESE CAMPO RETORNA NULO
    const  errors=this.form.controls[field].errors || {};
    for(const key of Object.keys(errors)){
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'maxlength':
          return `Máximo ${errors['maxlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }

}
