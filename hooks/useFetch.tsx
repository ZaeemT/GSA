import { useState, useEffect } from "react";

export interface Post {
    id: number;
    title: string;
    summary: string;
    content: string
}   

const useFetch = (url:string) => {
    const [data, setData] = useState<Post | Post[] | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok){     // This is for if there is fault in response while the server or network is fine.
                    throw Error('Could not fetch data for that resource.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {     // This for displaying network error message.
                if (err.name === 'AbortError'){
                    console.log('Fetch Aborted'); 
                } else{
                    setIsPending(false);
                    setError(err.message);
                }
            });
        
            return () => abortCont.abort();
        
    }, [url]);

    return { data, isPending, error }
}
 
export default useFetch;