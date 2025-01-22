import ProductCategory from "./ProductCategory";

export default function ProductTable() {
    return (<div>
        <h1 className="underline italic">Product Table</h1>
        <div className="flex justify-center items-center gap-14 ">
            <div>
                Name
            </div>
            <div>
                Price
            </div>
        </div>
        <ProductCategory/>
        <ProductCategory/>
    </div>)
}