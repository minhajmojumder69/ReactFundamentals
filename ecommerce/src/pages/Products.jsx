import { useEffect, useState } from "react";
import ProductsCard from "../components/productsCard";
import UseFetch from "../hooks/UseFetch";

const Products = () => {
    const {products,loading,err} = UseFetch()
    const [search,setSearch] = useState('')
    const [sort,setSort] = useState('')
    const [copyProducts,setCopyProducts] = useState([])

    useEffect(()=>{
        let result = [...products]

        if(!search.trim() !== ''){
            result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        }
        if(sort == 'low'){
            result.sort((a,b)=> a.price - b.price)
        }
        if(sort == 'high'){
            result.sort((a,b)=> b.price - a.price)
        }
        setCopyProducts(result)

    },[products,search,sort])

    if(loading){
        return <p>Loading...</p>
    }
    if(err){
        return <p>{err}</p>
    }

    return (
        <>
            <div>
                <input className="border" value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search" />
                <select value={sort} onChange={(e)=> setSort(e.target.value)}>
                    <option value=''>Default</option>
                    <option value='low'>Low to High</option>
                    <option value='high'>High to Low</option>
                </select>
            </div>

            <div style={{display:"grid",gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
                {
                    copyProducts.map(product=>
                        <ProductsCard product={product}/>
                    )
                }
            </div>
        </>
    );
};

export default Products;