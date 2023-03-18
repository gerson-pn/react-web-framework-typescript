import { Component, ReactNode } from "react";
import Navegacao from "../componentes/navegacao";
import Accordion from "../componentes/accordion";
import Botoes from "../componentes/botoes";

export default class Home extends Component {
    render(): ReactNode {
        return (
            <>
                <Navegacao />
                <br></br>
                <Accordion />
                <br></br>
                <Botoes />
            </>
        )
    }
}