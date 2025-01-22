import FilterProduct from "./FilterProduct";
import productsData from "./ProductsData";
import ProductTable from "./ProductTable";
import groupProductByCategory from "./ProductUtil";

export default function ProductList(){
    let group = groupProductByCategory(productsData);
    console.log("Group , ", group);
    let categories = Object.entries(group);
    console.log("categories :", categories)
    return (<div>
        <h1 className="underline">Product List </h1>
        <FilterProduct/>
        <ProductTable categories={categories}/>
        
    </div>)
}