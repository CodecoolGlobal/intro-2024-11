import { Link } from 'react-router-dom';
import './Cat.css';

import { useContext, useState } from "react"
import { Button, Card } from '@mui/material';
import { ThemeContext } from './ThemeContext';

export default function Cat ({printCatInfo, incrementCounter, id, url}) {
    const [isSelected, setIsSelected] = useState('-');

    const [clickCount, setClickCount] = useState(0);

    const { theme } = useContext(ThemeContext);

    return (
        <Card variant="outlined">
            <h1><Link to={ `/cat/${id}` }>{id}</Link> ({isSelected})</h1>

            <p>Theme: {theme}</p>

            <Button sx={{ marginBottom: '20px' }} variant="contained" onClick={() => {
                setIsSelected('Selected');
            }}>Select</Button>
            <br />

            <Button sx={{ marginBottom: '20px' }} variant="contained" onClick={() => {
                setClickCount(oldValue => oldValue + 1);
                incrementCounter();
                printCatInfo(id, clickCount);
            }}>
                Click ({clickCount})
            </Button>
            <br />

            <img className='cat-image' src={url} alt={id} />
        </Card>
    )
}