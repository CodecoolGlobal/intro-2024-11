import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CatDetails() {
    const { id } = useParams();
    const [catData, setCatData] = useState(null)

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/${id}`)
            .then(response => response.json())
            .then(data => setCatData(data));

        // AbortController
    }, [id])

    return (
        catData
            ?
            (<div className="CatDetails">
                <h1>{catData.id}</h1>
                {
                    catData.breeds && <div>
                        <p>Breed: {catData.breeds[0].name}</p>
                    </div>
                }
                <img src={catData.url} alt={catData.id} />
            </div>)
            :
            <h1>Loading...</h1>
    )
}