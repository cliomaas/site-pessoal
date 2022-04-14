import { Component } from "react";
import Timeline from "../../components/Formacao/Timeline";
import MenuContainer from "../../components/Menu/MenuContainer";
import Title from "../../components/Title/Title";

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
                <Title title={"Formação"} subtitle={"Onde estudei"} />
                <MenuContainer setPink={this.state.pink} />
                <Timeline />
            </>

        );
    }
}

export default Formacao;