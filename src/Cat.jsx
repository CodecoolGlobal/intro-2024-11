import { Link } from 'react-router-dom';
import './Cat.css';

import { useState } from "react"

export default function Cat ({printCatInfo, incrementCounter, id, url}) {
    const [isSelected, setIsSelected] = useState('-');

    const [clickCount, setClickCount] = useState(0);

    return (
        <div>
            <h1><Link to={ `/cat/${id}` }>{id}</Link> ({isSelected})</h1>

            <button onClick={() => {
                setIsSelected('Selected');
            }}>Select</button>
            <br />

            <button onClick={() => {
                setClickCount(oldValue => oldValue + 1);
                incrementCounter();
                printCatInfo(id, clickCount);
            }}>
                Click ({clickCount})
            </button>
            <br />

            <img className='cat-image' src={url} alt={id} />
        </div>
    )
}