import { Component } from "react";
import ExperienciaCard from "../../components/Experiencia/ExperienciaCard";
import MenuContainer from "../../components/MenuLateral/MenuContainer";
import styles from '../../components/Experiencia/Experiencia.module.css'
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";

class Experiencia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: "experiencia",
        };
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <Title title="Experiência" subtitle="Meus projetos" />
                <MenuContainer setPink={this.state.pink} />
                <div className={styles.cardContent}>
                    <ExperienciaCard />
                </div>
            </div>
        )
    }
}
export default Experiencia;