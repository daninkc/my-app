import React from 'react';
import styles from '../styles/Greetings.css';


class Greetings extends React.Component {
    render() {
        return (
            
    <div className="hello"> 
        Hola, {this.props.nombre}! Te extrañábamos!
    </div>

    )
}
}

export default Greetings;