import React, { Component } from "react";


class SobreMimDescricao extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Jane Doe.</h1>
                        <img src='./images/imagem-perfil.png' />
                    </div>
                    <div>
                        <div>
                            <h1>Sobre mim</h1>
                            <div>
                                <hr />
                                <p>Quem sou eu</p>
                            </div>
                        </div>
                        <p>Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                            Cras pharetra sagittis ullamcorper. Nulla egestas pulvinar eros,
                            ullamcorper sagittis Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                            Cras pharetra sagittis ullamcorper. Nulla egestas pulvinar eros, ullamcorper sagittis Aliquam ac felis quam.
                            Donec commodo mi vel ante placerat rutrum. Cras pharetra sagittis ullamcorper.
                            Nulla egestas pulvinar eros, ullamcorper sagittis </p>
                        <div>
                            <button>Meu curriculo</button>
                            <button>Me contrate!</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export default SobreMimDescricao;
