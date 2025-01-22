
function ProductItems() {
    return <div className="flex items-center justify-center gap-16">
        <div>
            Apple
        </div>
        <div> $4</div>
    </div>;
}


export default function ProductCategory() {
    return (<div>
        <div className="italic text-lg">
            Fruits
        </div>
        <ProductItems/>
        
    </div>)
}


