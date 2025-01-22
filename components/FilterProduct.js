export default function FilterProduct() {
    return (<div>
        <div>
            <input type="text" placeholder="Search..." className="border-2"/>
        </div>
        <div className="text-center mt-2">
            <input type="checkbox" id="onlyStock" className="pl-3"/>
            <label htmlFor="onlyStock">Show only in Stock</label>
        </div>
    </div>)
}