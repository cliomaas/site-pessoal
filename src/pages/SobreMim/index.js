import MenuContainer from "../../components/Menu/MenuContainer";
import './index.css'
import SobreMimDescricao from "./SobreMimDescricao";
import React, { Component } from "react";
class SobreMim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: true
        };
    }
    render() {
        return (
            <>
                <MenuContainer setPink={this.state.pink} />
                <SobreMimDescricao />

            </>
        );
    }
}

export default SobreMim;