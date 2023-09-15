
//FONDO DEL LIENZO
export var bg_color="#BDBDBD";

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
      font-size: 36px;
      padding:5px;
      max-height: 150px;
      overflow: hidden;
    }

    p{
      margin: 0;
    }
    `
};

// PARA SUBTITULOS FIJOS
export var sub_bg_color="#7C4DFF";
export var sub_txt_color="#FFFFFF";
// PARA APARTADOS
export var ap_bg_color="#FFFFFF";


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