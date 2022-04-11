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
            <div className="parent">
                <MenuContainer setPink={this.state.pink} />
                <SobreMimDescricao />

            </div>
        );
    }
}

export default SobreMim;