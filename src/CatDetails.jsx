import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function CatDetails() {
    const { id } = useParams();
    const { data: catData, loading, error } = useFetch(`https://api.thecatapi.com/v1/images/${id}`);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(new Date().getTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [id]);

    return (
        <>
            <Link to="/">Vissza</Link>
            {catData && !loading && (<div className="CatDetails">
                <Typography
                    component="h1"
                    variant="h4"
                >{catData.id}</Typography>
                {
                    catData.breeds && <div>
                        <p>Breed: {catData.breeds[0].name}</p>
                    </div>
                }
                <img src={catData.url} alt={catData.id} />
            </div>)
            }

            {loading && <h1>Loading...</h1>}

            {error && <p>{error}</p>}
        </>

    )
}