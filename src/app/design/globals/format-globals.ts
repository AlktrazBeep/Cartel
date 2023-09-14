

export var bg_color="#BDBDBD";

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

export var sub_color="#7C4DFF";


export function changeBgColor(bg:string){
  bg_color=bg;
}
export function changeTituloColor(bg:string){
  titulo_color=bg;
}
