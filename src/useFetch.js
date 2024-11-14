import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setLoading(true);
        setError(null);

        let controller = new AbortController();
        const signal = controller.signal;

        fetch(url, { signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load.");
                }

                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

        return () => {
            if (controller) {
                controller.abort();
                console.log("Download aborted");
            }
        }
    }, [url]);

    return { data, loading, error };
}