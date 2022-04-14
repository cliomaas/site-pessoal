import { Component } from "react";
import ExperienciaCard from "../../components/Experiencia/ExperienciaCard";
import MenuContainer from "../../components/Menu/MenuContainer";
import styles from '../../components/Experiencia/Experiencia.module.css'
import Title from "../../components/Title/Title";

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
                <Title title="Experiência" subtitle="Meus projetos" />
                <MenuContainer setPink={this.state.pink} />
                <div className={styles.cardContent}>
                    <ExperienciaCard />
                    <ExperienciaCard />
                    <ExperienciaCard />
                    <ExperienciaCard />
                </div>
            </div>
        )
    }
}
export default Experiencia;