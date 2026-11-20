import { Link } from "react-router";
import UseFetch from "../hooks/UseFetch";
import ProductsCard from "../components/productsCard";

const Home = () => {

    const {products,loading,err} = UseFetch()
    if(loading){
        return <p>Loading...</p>
    }
    if(err){
        return <p>{err}</p>
    }

    return (
        <div>
            <div style={{display:"grid",gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
                {
                    products.slice(0,4).map(product=>
                        <ProductsCard product={product}/>
                    )
                    
                }
            </div>
            <button><Link to={"/products"} >See all products</Link></button>
        </div>
    );
};

export default Home;