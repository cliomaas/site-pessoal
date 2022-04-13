import axios from "axios";
import React, { Component } from "react";
import styles from "./SobreMim.module.css"


class SobreMimContatos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            persons: []
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    componentDidMount() {
        let cep = document.getElementById('cep').innerHTML.replace(/[^\d]+/g, '')
        console.log(cep)
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then(res => {
                const persons = res.data;
                console.log(res.data)
                this.setState({ persons });
                console.log(this.state.persons)
            })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <div>
                            <h1>Contato</h1>
                            <div className={styles.quemTitle}>
                                <hr />
                                <p>Endereço</p>
                            </div>
                        </div>
                        <div className={styles.cepContent}>
                            <p className={`${styles.descriptionCep} ${styles.animTypewriter}`} id="cep">Meu cep: 01423-010</p>
                            <button className={styles.buttonSecundary} onClick={this.handleClick}>Exibir endereço completo</button>
                            <div className={this.state.active ? styles.shownComponent : styles.hiddenComponent}>
                                <p style={{ margin: '20px 0px' }} className={styles.descriptionText}>{this.state.persons.logradouro}, n° 1000, {this.state.persons.bairro}. {this.state.persons.localidade}, {this.state.persons.uf} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default SobreMimContatos;