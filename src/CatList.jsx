import './CatList.css';

import { useEffect, useState } from "react";
import Cat from "./Cat";
import { Button } from '@mui/material';

export default function CatList() {
    const [cats, setCats] = useState([]);
    const [globalClickCounter, setGlobalClickCounter] = useState(0);
    const [catInfo, setCatInfo] = useState('');

    useEffect(function () {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(response => response.json())
            .then(data => {
                setCats(data);
            })
    }, []);

    function incrementCounter() {
        setGlobalClickCounter(oldValue => oldValue + 1);
    }

    function printCatInfo(name, count) {
        setCatInfo(`Last cat: ${name} (${count})`);
    }

    return (
        <div className="CatList">
            <Button variant="contained" onClick={() => {
                const sortedCats = cats.sort((a, b) => {
                    return a.id > b.id ? 1 : -1;
                });
            
                setCats([...sortedCats.slice(1)]);
            }}>Sort by name</Button>
            <br />

            <h1>{globalClickCounter}</h1>
            <h2>{catInfo}</h2>

            <div className="cats">
                {cats.map((cat) => (
                    <Cat printCatInfo={printCatInfo} incrementCounter={incrementCounter} key={cat.id} id={cat.id} url={cat.url} />
                ))}
            </div>
        </div>
    )
}