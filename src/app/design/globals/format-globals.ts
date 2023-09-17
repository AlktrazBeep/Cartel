import { BodyCartel, Cartel, MediaCartel } from "../Interfaces/format.interface";

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
    //  BORRADO TEMPORAL
    // br[data-mce-bogus="1"] {
    //   display:none;
    // }
    content_style:`
    /* CLASES PARA TINYMCE GENERAL solo para el formato 1*/
   .ap-onef .mce-content-body{
       font-size: 16px;
       padding:5px;
       overflow: hidden;
     }
 
 
   .minh-onef .mce-content-body{
       max-height: 400px;
   }
   
   .minh-auto-onef .mce-content-body{
    max-height: 350px;
   }

   .minh-meto-onef .mce-content-body{
       max-height: 600px;
   }
   .minh-res-onef .mce-content-body{
       max-height: 250px;
   }
   /* CLASES PARA TINYMCE GENERAL solo para el formato 2*/
   ap-twof .mce-content-body{
       font-size: 16px;
       padding:5px;
       overflow: hidden;
   }
   .minh-twof .mce-content-body{
       max-height: 150px;
   }

   .minh-auto-twof .mce-content-body{
       max-height: 290px;
   }
   .minh-meto-twof .mce-content-body{
       max-height: 350px;
   }
   .minh-res-twof .mce-content-body{
       max-height: 500px;
   }
   /* CLASES PARA TINYMCE GENERAL solo para el formato 3*/
   .ap-threef .mce-content-body{
       font-size: 16px;
       padding:5px;
       overflow: hidden;
     }
 
 
   .minh-threef .mce-content-body{
       max-height: 250px;
   }
   
   .minh-auto-threef .mce-content-body{
    max-height: 350px;
   }

   .minh-bot-threef .mce-content-body{
       max-height: 200px;
   }
   .minh-datos-threef .mce-content-body{
       max-height: 150px;
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
  resultados: "<p>Escribe tus resultados aquí<p>",
  conclusion: "<p>Escribe tu conclusión aquí<p>",
  referencias: "<p>Escribe tus referencias aquí<p>",
  datos: "<p>Escribe tus datos aquí<p>",
  agradecimientos: "<p>Escribe tus agradecimientos aquí<p>"
}
//GLOBALES PARA INFORMACION DEL CONTENIDO MULTIMEDIA
export const mediaCartel:MediaCartel={
  grafica1: "",
  grafica2: "",
  imagenes: [],
}


//CARTEL COMPLETO INICIAL

export const cartel:Cartel={
  name: "",
  title: "",
  colors: {
    sub_bg: sub_bg_color,
    sub_txt: sub_txt_color,
    ap_bg : ap_bg_color,
    title_bg: titulo_color
  },
  body:   bodyCartel,
  media:  mediaCartel,
  formato: "",
}
//GLOBALES PARA BACKEND QUE CAMBIAN EN PRODUCTIVO

//AQUI DEBE ESTAR EL CORE DE LA API
export const API_CORE:string="";

export const URL_PREVIEW:string="localhost:4200/preview/";