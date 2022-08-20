import {useState, useEffect} from 'react';

export const useFetch = url => {
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return [
        loading, 
        data, 
        error
    ]
}