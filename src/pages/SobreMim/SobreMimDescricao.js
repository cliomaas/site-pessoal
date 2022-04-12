import React, { Component } from "react";
import styles from "./SobreMim.module.css"

class SobreMimDescricao extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.avatar}>
                        <h1>Jane <span style={{ color: '#EA4B7B' }}> Doe.</span></h1>
                        <img src='./images/imagem-perfil.png' />
                    </div>
                    <div className={styles.description}>
                        <div>
                            <h1>Sobre mim</h1>
                            <div className={styles.quemTitle}>
                                <hr />
                                <p>Quem sou eu</p>
                            </div>
                        </div>
                        <p className={styles.descriptionText}>Aliquam ac felis quam.Donec commodo mi vel ante placerat rutrum.
                            Cras pharetra sagittis ullamcorper.Nulla egestas pulvinar eros, ullamcorper sagittis Aliquam ac felis quam.
                            Donec commodo mi vel ante placerat rutrum.Cras pharetra sagittis ullamcorper.Nulla egestas pulvinar eros,
                            ullamcorper sagittis Aliquam ac felis quam.Donec commodo mi vel ante placerat rutrum.Cras pharetra sagittis ullamcorper.
                            Nulla egestas pulvinar eros, ullamcorper sagittis  </p>
                        <div className={styles.buttonsDiv}>
                            <button className={styles.buttonPrimary}>Meu curriculo</button>
                            <button className={styles.buttonSecundary}>Me contrate!</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export default SobreMimDescricao;
