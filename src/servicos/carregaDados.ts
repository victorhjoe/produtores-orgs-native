import produtores from "../mocks/produtores";
import topo from "../mocks/topo";
import { ProdutoresType } from "../types/types";

export const carregaProdutores = (): ProdutoresType => {
    return produtores;
}

export const carregaTopo = (): Object => {
    return topo;
}