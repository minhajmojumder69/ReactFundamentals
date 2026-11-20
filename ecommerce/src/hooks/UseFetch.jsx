import { useEffect, useState } from "react";

const UseFetch = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState('')
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(e=> setErr(e))
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return {products,loading,err}
};

export default UseFetch;