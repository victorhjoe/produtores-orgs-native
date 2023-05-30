import React, { useState } from "react";

import {  StyleSheet, View } from "react-native"
import Estrela from "./Estrela";

type EstrelasProps = {
    quantidade: number,
    editavel?: boolean,
    grande?: boolean
}

const Estrelas = ({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}: EstrelasProps): JSX.Element => {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = (): any => {
        const listaEstrelas = [];

        for(let i=0; i < 5; i++){
            listaEstrelas.push(
                <Estrela
                    key={i} 
                    onPress={() => setQuantidade(i + 1)} 
                    desabilitada={!editavel} 
                    preenchida={i < quantidade} 
                    grande={grande}
                />
            )
        }

        return listaEstrelas;
    }

    return (
        <View style={estilos.estrelas}>
            <RenderEstrelas/>
        </View>
    )
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    }
})

export default Estrelas;