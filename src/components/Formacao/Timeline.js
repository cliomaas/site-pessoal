import { Component } from "react";
import styles from './Formacao.module.css'
class Timeline extends Component {
    render() {
        return (
            <>
                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <div className={styles.contentLeft}>
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
                    <div className={styles.right}>
                        <div className={styles.contentRight}>
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
                    <div className={styles.left}>
                        <div className={styles.contentLeft}>
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