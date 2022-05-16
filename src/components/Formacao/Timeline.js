import { Component } from "react";
import styles from './Formacao.module.css'
class Timeline extends Component {
    getNewUser = JSON.parse(localStorage.getItem("usuario"))
    render() {
        return (
            <>
                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <div className={styles.contentLeft}>
                            <h1>{this.getNewUser.anoCurso}</h1>
                            <div>
                                <h2>{this.getNewUser.faculdade}</h2>
                                <p>
                                    {this.getNewUser.descricaoCurso}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Timeline;