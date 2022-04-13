import { Component } from "react";
import Timeline from "../../components/Formacao/Timeline";
import MenuContainer from "../../components/Menu/MenuContainer";

class Hobbies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: "hobbies"
        };
    }
    render() {
        return (
            <>
                <MenuContainer setPink={this.state.pink} />
                <Timeline />
            </>

        );
    }
}

export default Hobbies;