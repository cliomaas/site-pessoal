import { Component } from "react";
import styles from './Experiencia.module.css'

class ExperienciaCard extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.year}>
                    <h1>2000</h1>
                    <p>Data</p>
                </div>
                <div className={styles.text}>
                    <h3>
                        Lorem Ipsum
                        Lorem
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