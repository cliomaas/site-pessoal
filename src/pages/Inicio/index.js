import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Menu from "../../components/MenuLateral/Menu";
import MenuContainer from "../../components/MenuLateral/MenuContainer";
import './index.css'

class Inicio extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="content-description">
                        <div className="info-inicio">
                            <h1>CV<span style={{ color: "rgb(234, 75, 123)" }}>.</span></h1>
                            <Link to="/login"><button id="botao-inicio">Comece agora!</button></Link>
                        </div>
                        <img className="img-inicio" src='./images/imagem_inicio.png' />
                        <div className="description-inicio">
                            <h5>Lorem Ipsum</h5>
                            <h1>Seu site de apresentação pessoal pronto em segundos!</h1>
                            <h6>Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum. Cras pharetra sagittis ullamcorper.
                        Nulla egestas pulvinar eros, ullamcorper sagittis </h6>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Inicio;