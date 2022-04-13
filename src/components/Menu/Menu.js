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
                <h2 className="sobre-texto"><Link to="/sobre">Sobre mim</Link></h2>
                <h2 className=""><Link to="/experiencia">Experiência</Link></h2>
                <h2><Link to="/hobbies">Hobbies</Link></h2>
                <h2><Link to="/formacao">Formação</Link></h2>
            </div>
        );
    }
}

export default Menu;