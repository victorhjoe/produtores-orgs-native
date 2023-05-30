import React from "react";
import Topo from './componentes/Topo';
import Produtores from "./componentes/Produtores";

const Home = (): JSX.Element => {
    return (
        <Produtores topo={Topo}/>
    )
}

export default Home;