import { Component } from "react";
import Timeline from "../../components/Formacao/Timeline";
import MenuContainer from "../../components/Menu/MenuContainer";

class Formacao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: "formacao"
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

export default Formacao;