export interface ColorBodyArray{
    title_bg: string;
    sub_bg: string;//COLORES DE SUBTITULO
    sub_txt: string;
    ap_bg : string;//COLORE DE APARTADOS
}

export interface BodyCartel{
    intro: string;
    objetivos: string;
    metodologia: string;
    resultados: string;
    conclusion: string;
    referencias: string;
    datos: string;
    agradecimientos: string;
}

export interface MediaCartel{
    grafica1: string;
    grafica2: string;
    imagenes: Array<string>
}


export interface Cartel{
    name:   string;
    title:  string;
    colors: ColorBodyArray;
    body:   BodyCartel;
    media:  MediaCartel;
    formato: string;
}