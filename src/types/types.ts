import { ImageSourcePropType } from "react-native/types";

export interface ProdutoresType {
    titulo: string,
    lista: ProdutorType[]
}

export interface ProdutorType {
    nome: string,
    imagem: ImageSourcePropType,
    distancia: string,
    estrelas: number
}