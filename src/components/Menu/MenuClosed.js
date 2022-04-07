import React, { Component } from "react";
import './MenuClosed.css';
import { ReactComponent as BiPerson } from "../../images/icons/bi_person.svg";
import { ReactComponent as ClarityStar } from "../../images/icons/clarity_star-line.svg";
import { ReactComponent as BeachAccess } from "../../images/icons/ic_outline-beach-access.svg";
import { ReactComponent as Graduation } from "../../images/icons/la_graduation-cap.svg";
import classNames from "classnames";

class MenuClosed extends Component {
    render() {
        return (
            <div id="closedMenu"
                onMouseDown={this.props.handleMouseDown}>
                <BiPerson className="icon sobre" />
                <ClarityStar className="icon experiencia" />
                <BeachAccess className="icon hobbies" />
                <Graduation className="icon formacao" />
            </div>
        );
    }
}

export default MenuClosed;