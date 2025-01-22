import ProductCategory from "./ProductCategory";


export default function ProductTable({categories}) {
    console.log("Property Categories: ", categories);
    
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
        {/* <ProductCategory products={productsData}/>
        <ProductCategory products={productsData}/> */}
        {
            categories.map((category,index) => 
                <ProductCategory key={index}
                                products={category[1]}/>)
        }
        </div>
        
    </div>)
}