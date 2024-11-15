import './CatList.css';

import { useContext, useEffect, useState } from "react";
import Cat from "./Cat";
import { Button } from '@mui/material';
import { ThemeContext } from './ThemeContext';

export default function CatList() {
    const [cats, setCats] = useState([]);
    const [globalClickCounter, setGlobalClickCounter] = useState(0);
    const [catInfo, setCatInfo] = useState('');

    const { theme, toggleTheme } = useContext(ThemeContext);

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
            <p>Your theme is: {theme}</p>
            <Button variant="contained" onClick={toggleTheme}>Toggle theme</Button>
            <br /><br />

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