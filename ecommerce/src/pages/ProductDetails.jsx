import { useParams } from "react-router";
import UseFetch from "../hooks/UseFetch";

const ProductDetails = () => {
    const {id} = useParams();
    const {products} = UseFetch()

    const singleProduct = products.find(p=> p.id == id)

    return (
        <div>
            <p>Products details page</p>
            <img src={singleProduct?.image} alt="" />
            <p className="font-bold text-xl">{singleProduct?.title}</p>
            <p>{singleProduct?.description}</p>
            <p className="text-green-700">Price: {singleProduct?.price}</p>
            <p className="text-red-500">Rate: {singleProduct?.rating?.rate}</p>
        </div>
    );
};

export default ProductDetails;