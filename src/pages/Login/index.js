import { Component } from "react";
import Header from "../../components/Header/Header";
import './index.css'
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container-buttons">
                    <Link to="/sobre"><button className="botao-login">Quero ver meu perfil</button></Link>
                    <Link to="/cadastro"><button className="botao-login">Quero cadastrar um novo perfil</button></Link>
                </div>
            </>
        )
    }
}

export default Login;