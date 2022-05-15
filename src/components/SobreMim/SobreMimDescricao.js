import React, { Component } from "react";
import { useUser } from "../../hooks/useUser";
import styles from "./SobreMim.module.css"

export function SobreMimDescricao({ id }) {
    const getNewUser = JSON.parse(localStorage.getItem("usuario"))


    console.log(getNewUser.nome)
    return (
        <div >
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <h1>{getNewUser.nome} <span style={{ color: '#EA4B7B' }}> {getNewUser.sobrenome}</span></h1>
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
                    <p className={styles.descriptionText}>{getNewUser.descricao}</p>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.buttonPrimary}>Meu curriculo</button>
                        <button className={styles.buttonSecundary}>Me contrate!</button>
                    </div>
                </div>
            </div>
        </div >
    );
}




export default SobreMimDescricao;
