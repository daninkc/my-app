import React from 'react';
import Greetings from '../components/Greetings'

function homePage(){
    return(
        <div className="container">
            <h1>
            <Greetings name='Dani'/>
            </h1>                
        </div>
    );
}

export default homePage;