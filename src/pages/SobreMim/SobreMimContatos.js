import React, { Component } from "react";
import styles from "./SobreMim.module.css"


class SobreMimContatos extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.description}>
                    <div>
                        <h1>Contato</h1>
                    </div>
                    <div className={styles.quemTitle}>
                        <hr />
                        <p>Endereço</p>
                    </div>
                </div>
            </div>
        );
    }


}

export default SobreMimContatos;