import FilterProduct from "./FilterProduct";

import ProductTable from "./ProductTable";

export default function ProductList(){
    return (<div>
        <h1 className="underline">Product List </h1>
        <FilterProduct/>
        <ProductTable/>
        
    </div>)
}