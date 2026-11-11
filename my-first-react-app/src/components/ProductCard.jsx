
const ProductCard = ({title,price,isStock}) => {
    return (
        <div className="product-card">
            <h2>Title: {title}</h2>
            <h2>Price: {price}</h2>
            <h2>{isStock ? 'Stock Available' : 'Stock Not Available'}</h2>
        </div>
    );
};

export default ProductCard;