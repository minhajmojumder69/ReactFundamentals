import { Link } from "react-router";

const ProductsCard = ({product}) => {
    return (
        <div className="shadow-2xl p-12 mt-5">
            <img className="w-full" src={product.image} alt="" />
            <p className="font-bold text-xl">{product.title}</p>
            <p className="text-green-700">Price: {product.price}</p>
            <p className="text-red-500">Rate: {product?.rating?.rate}</p>
            <Link to={`/products/${product.id}`}><button className="border p-2">Details</button></Link>
        </div>
    );
};

export default ProductsCard;