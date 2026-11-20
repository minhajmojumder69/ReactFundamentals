import ProductsCard from "../components/productsCard";
import UseFetch from "../hooks/UseFetch";

const Products = () => {
    const {products,loading,err} = UseFetch()

    if(loading){
        return <p>Loading...</p>
    }
    if(err){
        return <p>{err}</p>
    }

    return (
        <div style={{display:"grid",gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
            {
                products.map(product=>
                    <ProductsCard product={product}/>
                )
            }
        </div>
    );
};

export default Products;