import { Component } from "react";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>CV<span style={{ color: "rgb(234, 75, 123)" }}>.</span></h1>
                <input className="search" type="text"></input>
                <div></div>
            </div>
        )
    }
}

export default Header;