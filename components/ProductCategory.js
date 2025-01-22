
function ProductItems({product}) {
    return <div className="flex items-center justify-between">
        <div>
            {product.name}
        </div>
        <div> {product.price}</div>
    </div>;
}


export default function ProductCategory({products}) {
    // console.log("Products ,", products);
    return (<div>
        <div className="italic text-lg">
            {products[0].category}
        </div>
        {
            products.map((product, index)=> <ProductItems product={product} key={index}/>)
        }
        
    </div>)
}


