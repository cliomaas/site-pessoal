import { Component } from "react";
import styles from "../../components/Hobbies/Hobbies.module.css"
import HobbiesCard from "../../components/Hobbies/HobbiesCard";
import MenuContainer from "../../components/MenuLateral/MenuContainer";
import { default as bike } from "../../images/icons/bike.svg";
import { default as plane } from "../../images/icons/aviao.svg";
import { default as pencil } from "../../images/icons/lapis.svg";
import { default as music } from "../../images/icons/nota_musical.svg";
import { default as star } from "../../images/icons/star.svg";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";

class Hobbies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pink: "hobbies",
        };
    }
    render() {
        let getNewUser = JSON.parse(localStorage.getItem("usuario"))
        let bikeText = "Andar de bike";
        let planeText = "Viajar";
        let pencilText = "Desenhar";
        let musicText = "Ouvir Música"
        let title = "Hobbies"
        let subtitle = "O que gosto de fazer"

        if (getNewUser.hobby.includes("bike") || getNewUser.hobby.includes("bicicleta")) {
            let icon = { bike }
        }

        return (
            <>
                <Header />
                <div className={styles.wrapper}>

                    <MenuContainer setPink={this.state.pink} />
                    <Title title={title} subtitle={subtitle} />
                    <div className={styles.container}>
                        <HobbiesCard icon={getNewUser.hobby.includes("bicicleta") ? bike : getNewUser.hobby.includes("viajar") ? plane : getNewUser.hobby.includes("musica") ? music : star} text={getNewUser.hobby} />
                    </div>
                </div>
            </>

        );
    }
}

export default Hobbies;