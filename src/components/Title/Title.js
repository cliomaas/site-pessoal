import { Component } from "react";
import styles from './Title.module.css'

class Title extends Component {
    render() {
        return (
            <div className={styles.description}>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className={styles.quemTitle}>
                        <hr />
                        <p>{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;