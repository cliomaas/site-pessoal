import MenuContainer from "../../components/MenuLateral/MenuContainer";
import './index.css'
import SobreMimDescricao from "../../components/SobreMim/SobreMimDescricao";
import React, { Component } from "react";
import SobreMimContatos from "../../components/SobreMim/SobreMimContatos";
import Header from "../../components/Header/Header";
class SobreMim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: "sobre"
        };
    }
    render() {
        return (
            <div className="parent">
                <Header />
                <MenuContainer setPink={this.state.pink} />
                <SobreMimDescricao />
                <SobreMimContatos />
            </div>
        );
    }
}

export default SobreMim;