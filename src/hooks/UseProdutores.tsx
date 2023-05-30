import { useState, useEffect } from "react";
import { ProdutorType, ProdutoresType } from "../types/types";
import { carregaProdutores } from "../servicos/carregaDados";

const useProdutores = () => {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState<ProdutorType[]>([]);

    useEffect(() => {
        const retorno: ProdutoresType = carregaProdutores();
        setTitulo(retorno.titulo)
        setLista(retorno.lista)
    }, [])

    return [titulo, lista]
}

export default useProdutores;