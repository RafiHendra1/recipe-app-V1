import {useState, useEffect} from 'react'
const useFetch = (url, options, params) => { 

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, options, {signal: abortCont.signal}).then(res => {
            if (!res.ok){
                throw Error('Could not fetch the data')
            }
            return res.json();
        }).then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
            console.log(data)
        }).catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false);
                setError(err.message);
            }
                     
        })
        console.log("done")
        return () => abortCont.abort()
    }, [params]);
    return {data, isPending, error}
}
export default useFetch;