import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CatDetails() {
    const { id } = useParams();
    const [catData, setCatData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                // fetch('...')
                //     .then(...)
                //     .catch((error) => {

                //     })
                //     .finally(() => {

                //     });


                const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to load cat.");
                }

                const data = await response.json();
                setCatData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        // AbortController
    }, [id])

    return (
        <>
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