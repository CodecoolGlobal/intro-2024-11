import './Cat.css';

import { useEffect, useState } from "react"

export default function Cat ({printCatInfo, incrementCounter, name, image}) {
    const [isSelected, setIsSelected] = useState('-');

    const [clickCount, setClickCount] = useState(0);

    const [color, setColor] = useState('white');

    useEffect(function () {
        console.log('mount');

        // strict mode

        /* Szabályok:
            - nem lehet async
            - felsorolni minden használt propot és state-et
        */

        return function () {
            console.log(name + ' unmounted');
        }

    }, [name])

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
                printCatInfo(name, clickCount);
            }}>
                Click ({clickCount})
            </button>
            <br />

            <img className='cat-image' src={image} alt={name} />
        </div>
    )
}