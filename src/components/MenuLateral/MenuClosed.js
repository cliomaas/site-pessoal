import React, { Component } from "react";
import './MenuClosed.css';
import { ReactComponent as BiPerson } from "../../images/icons/bi_person.svg";
import { ReactComponent as ClarityStar } from "../../images/icons/clarity_star-line.svg";
import { ReactComponent as BeachAccess } from "../../images/icons/ic_outline-beach-access.svg";
import { ReactComponent as Graduation } from "../../images/icons/la_graduation-cap.svg";

class MenuClosed extends Component {
    render() {
        var pinkSobre = "";
        var pinkExp = "";
        var pinkHob = "";
        var pinkFor = "";

        if (this.props.pink === "sobre") {
            pinkSobre = " pink";
        }
        else if (this.props.pink === "experiencia") {
            pinkExp = " pink"
        }
        else if (this.props.pink === "hobbies") {
            pinkHob = " pink"
        }
        else if (this.props.pink === "formacao") {
            pinkFor = " pink"
        }

        return (
            <div id="closedMenu"
                onMouseDown={this.props.handleMouseDown}>
                <BiPerson className={"icon sobre" + pinkSobre} />
                <ClarityStar className={"icon experiencia" + pinkExp} />
                <BeachAccess className={"icon hobbies" + pinkHob} />
                <Graduation className={"icon formacao" + pinkFor} />
            </div>
        );
    }
}

export default MenuClosed;