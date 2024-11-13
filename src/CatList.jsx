import './CatList.css';

import { useState } from "react";
import Cat from "./Cat";

export default function CatList() {
    const [cats, setCats] = useState([
        { name: 'Whiskers', image: 'https://cdn2.thecatapi.com/images/2h7.jpg' },
        { name: 'Mittens', image: 'https://cdn2.thecatapi.com/images/MTU4NTQ2MA.jpg' },
        { name: 'Cirmi', image: 'https://cdn2.thecatapi.com/images/99h.jpg' },
        { name: 'Tira', image: 'https://cdn2.thecatapi.com/images/8CuEPFNuD.jpg' },
    ]);
    const [globalClickCounter, setGlobalClickCounter] = useState(0);
    const [catInfo, setCatInfo] = useState('');

    function incrementCounter() {
        setGlobalClickCounter(oldValue => oldValue + 1);
    }

    function printCatInfo(name, count) {
        setCatInfo(`Last cat: ${name} (${count})`);
    }

    return (
        <div className="CatList">
            <button onClick={() => {
                const sortedCats = cats.sort((a, b) => {
                    return a.name > b.name ? 1 : -1;
                });
            
                setCats([...sortedCats.slice(1)]);
            }}>Sort by name</button>
            <br />

            <h1>{globalClickCounter}</h1>
            <h2>{catInfo}</h2>

            <div className="cats">
                {cats.map((cat) => (
                    <Cat printCatInfo={printCatInfo} incrementCounter={incrementCounter} key={cat.name} name={cat.name} image={cat.image} />
                ))}
            </div>
        </div>
    )
}