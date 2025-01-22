import ProductCategory from "./ProductCategory";
import productsData from "./ProductsData";

export default function ProductTable() {
    return (<div className="flex justify-center items-center h-[100vh]">
        <div className="w-[250px] flex flex-col text-center">
        <h1 className="underline italic">Product Table</h1>
        <div className="flex justify-center items-center gap-14 ">
            <div>
                Name
            </div>
            <div>
                Price
            </div>
        </div>
        <ProductCategory products={productsData}/>
        <ProductCategory products={productsData}/>
        </div>
        
    </div>)
}