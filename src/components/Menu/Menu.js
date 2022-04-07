import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseLeave={this.props.handleMouseLeave}
                className={visibility}>
                <h2 className="sobre-texto"><Link to="/sobre" href="#">Sobre mim</Link></h2>
                <h2><a href="#">Experiência</a></h2>
                <h2><a href="#">Hobbies</a></h2>
                <h2><a href="#">Formação</a></h2>
            </div>
        );
    }
}

export default Menu;