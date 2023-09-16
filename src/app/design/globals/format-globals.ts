import { BodyCartel } from "../Interfaces/format.interface";

export const key="dyal385wlvsx071fkvr2nzs6llostwantfqy5z03rd1zehf2";
//FONDO DEL LIENZO
export var bg_color="#FFFFFF";

// PARA EL TITULO
export var titulo_color='#BDBDBD';
export const titulo_init={
    height: '100%',
    width: '100%',
    menubar: false,
    inline:true,
    plugins: [
      'autoresize'
    ],
    autoresize_on_init: false,
    toolbar:
      'bold italic forecolor | \
      alignleft aligncenter alignright alignjustify',
    
    content_style:`
    .mce-content-body{
      padding:5px;
      max-height: 150px;
      overflow: hidden;
    }

    p{
      margin: 0;
    }

    #titulo .mce-content-body{
      font-size: 36px;
    }
    `
};

// PARA SUBTITULOS FIJOS
export var sub_bg_color="#7C4DFF";
export var sub_txt_color="#FFFFFF";

// PARA APARTADOS
export var ap_bg_color="#FFFFFF";

export const ap_init={
  height: '100%',
    width: '100%',
    menubar: false,
    inline:true,
    //PUEDEN INSERTAR LINKS
    plugins: [
      'autoresize',
      'link'
    ],
    autoresize_on_init: false,
    font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 30pt',
    toolbar:
      'fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify | link',
    br_in_pre: false,

    //ESTILOS SOLO PARA APARTADOS ALOMEJOR PUEDEN PASARSE AL FORMATO DE CSS DE CADA UNO
    content_style:`

    br[data-mce-bogus="1"] {
      display:none;
    }
    .ap-onef .mce-content-body{
      font-size: 16px;
      padding:5px;
      max-height: 200px;
      overflow: hidden;
    }

    `
}




export function changeBgColor(bg:string){
  bg_color=bg;
}
export function changeTituloColor(bg:string){
  titulo_color=bg;
}

export function changeSubBgColor(bg:string){
  sub_bg_color=bg;
}
export function changeSubTxtColor(bg:string){
  sub_txt_color=bg;
}
export function changeApBgColor(bg:string){
  ap_bg_color=bg;
}


//GLOBALES PARA INFORMACION DEL BODY TEXT
export const bodyCartel:BodyCartel={
  intro: `<p>Escribe tu introducción aquí<p>`,
  objetivos: `<p>Escribe tus objetivos aquí<p>`,
  metodologia: "<p>Escribe tu metodología aquí<p>",
  conclusion: "<p>Escribe tu conclusión aquí<p>",
  referencias: "<p>Escribe tus referencias aquí<p>",
  datos: "<p>Escribe tus datos aquí<p>",
  agradecimientos: "<p>Escribe tus agradecimientos aquí<p>"
}