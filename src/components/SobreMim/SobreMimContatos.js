import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./SobreMim.module.css"
import { useUser } from "../../hooks/useUser";


export function SobreMimContatos({ id }) {
    const getNewUser = JSON.parse(localStorage.getItem("usuario"))
    const [cep, setCep] = useState([]);
    const [active, setActive] = useState(false)
    const userCep = getNewUser.cep

    useEffect(() => {
        axios.get('https://viacep.com.br/ws/' + userCep + '/json/')
            .then(res => {
                const endereco = res.data;
                setCep(endereco)
                console.log(cep)
            })
    }, []);


    function handleClick() {
        const currentState = active;
        setActive(!currentState);
    }


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
                        <p className={`${styles.descriptionCep} ${styles.animTypewriter}`} id="cep">Meu cep: {getNewUser.cep}</p>
                        <button className={styles.buttonSecundary} onClick={handleClick}>Exibir endereço completo</button>
                        <div className={active == true ? styles.shownComponent : styles.hiddenComponent}>
                            <p style={{ margin: '20px 0px' }} className={styles.descriptionText}>{cep.logradouro}, {getNewUser.numero}, {cep.bairro}, {cep.localidade}, {cep.uf}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// class SobreMimContatos extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false,
//             persons: []
//         };

//         this.handleClick = this.handleClick.bind(this)
//     }


//     componentDidMount() {
//         let cep = document.getElementById('cep').innerHTML.replace(/[^\d]+/g, '')
//         console.log(cep)
//         axios.get('https://viacep.com.br/ws/' + cep + '/json/')
//             .then(res => {
//                 const persons = res.data;
//                 console.log(res.data)
//                 this.setState({ persons });
//                 console.log(this.state.persons)
//             })
//     }
//     render() {

//     }


// }

export default SobreMimContatos;