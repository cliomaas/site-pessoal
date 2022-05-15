import { Component } from "react";
import styles from './Experiencia.module.css'

class ExperienciaCard extends Component {
    getNewUser = JSON.parse(localStorage.getItem("usuario"))
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.year}>
                    <h1>{this.getNewUser.data}</h1>
                    <p>Data</p>
                </div>
                <div className={styles.text}>
                    <h3>
                        {this.getNewUser.empresas}
                    </h3>
                    <p>
                        Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                        Cras pharetra sagittis ullamcorper.
                    </p>
                </div>
            </div>
        );
    }
}
export default ExperienciaCard;