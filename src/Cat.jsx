import './Cat.css';

import { useState } from "react"

export default function Cat ({incrementCounter, name, image}) {
    const [isSelected, setIsSelected] = useState('-');

    const [clickCount, setClickCount] = useState(0);

    return (
        <div>
            <h1>{name} ({isSelected})</h1>

            <button onClick={() => {
                setIsSelected('Selected');
            }}>Select</button>
            <br />

            <button onClick={() => {
                setClickCount(oldValue => oldValue + 1);
                incrementCounter();
            }}>
                Click ({clickCount})
            </button>
            <br />

            <img className='cat-image' src={image} alt={name} />
        </div>
    )
}