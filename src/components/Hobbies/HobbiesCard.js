import { Component } from "react";
import styles from './Hobbies.module.css'

class HobbiesCard extends Component {
    render() {
        return (
            <div className={styles.content}>
                <img src={this.props.icon} />
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}
export default HobbiesCard;