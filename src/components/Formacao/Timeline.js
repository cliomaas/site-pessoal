import { Component } from "react";
import styles from './Formacao.module.css'
class Timeline extends Component {
    render() {
        return (
            <>
                <div class={styles.timeline}>
                    <div class={styles.left}>
                        <div class={styles.contentLeft}>
                            <h1>2017</h1>
                            <div>
                                <h2>Lorem Ipsum
                                    Lorem</h2>
                                <p>
                                    Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra sagittis ullamcorper. Nulla egestas pulvinar eros,
                                    ullamcorper sagittis Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class={styles.right}>
                        <div class={styles.contentRight}>
                            <h1>2017</h1>
                            <div>
                                <h2>Lorem Ipsum
                                    Lorem</h2>
                                <p>
                                    Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra sagittis ullamcorper. Nulla egestas pulvinar eros,
                                    ullamcorper sagittis Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class={styles.left}>
                        <div class={styles.contentLeft}>
                            <h1>2017</h1>
                            <div>
                                <h2>Lorem Ipsum
                                    Lorem</h2>
                                <p>
                                    Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra sagittis ullamcorper. Nulla egestas pulvinar eros,
                                    ullamcorper sagittis Aliquam ac felis quam. Donec commodo mi vel ante placerat rutrum.
                                    Cras pharetra
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