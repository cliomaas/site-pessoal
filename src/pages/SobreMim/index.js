import MenuContainer from "../../components/Menu/MenuContainer";
import './index.css'
import SobreMimDescricao from "./SobreMimDescricao";
import React, { Component } from "react";
import SobreMimContatos from "./SobreMimContatos";
class SobreMim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: true
        };
    }
    render() {
        return (
            <div className="parent">
                <MenuContainer setPink={this.state.pink} />
                <SobreMimDescricao />
                <SobreMimContatos />
            </div>
        );
    }
}

export default SobreMim;