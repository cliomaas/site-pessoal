import React, { Component } from "react";
import Menu from "./Menu";
import MenuClosed from "./MenuClosed";



class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };


        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseLeave(e) {
        this.setState({
            visible: false,
        });

        console.log("left");
        e.stopPropagation();
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        var pink = " ";
        if (this.props.setPink === "sobre") {
            var pink = "sobre";
        } else if (this.props.setPink === "experiencia") {
            var pink = "experiencia"
        } else if (this.props.setPink === "hobbies") {
            var pink = "hobbies"
        } else if (this.props.setPink === "formacao") {
            var pink = "formacao"
        }
        return (
            <>
                <MenuClosed handleMouseDown={this.handleMouseDown} pink={pink} />
                <Menu handleMouseLeave={this.handleMouseLeave}
                    menuVisibility={this.state.visible} />
            </>
        );
    }
}

export default MenuContainer;