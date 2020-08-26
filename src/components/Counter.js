import React, { useState } from 'react';
import styles from '../styles/Counter.css'

function Counter() {
    const [count, setCount] = useState(0);
     return (
    <button className="counterButton" onClick={() => setCount(count + 1)}>
        { count }
    </button>
    )
};


export default Counter;