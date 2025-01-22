"use client";
import { useState } from "react"

export default function FilterProduct({updateFilterChange}) {
    const [filter, setFilter] = useState("");
    const [showOnlyInStock, setShowOnlyOnStock] = useState(false);

    const filterOnChange = (event) => {
        updateFilterChange({
            filter:event.target.value,
            showOnlyInStock
        });
        setFilter(event.target.value);
        
    }

    const showOnlyInStockChangeHandler = (event) => {
        updateFilterChange({
            filter,
            showOnlyInStock:event.target.checked,
        })
        setShowOnlyOnStock(event.target.checked);
        
    } 
    return (<div>
        <div>
            <input type="text"
             placeholder="Search..."
              className="border-2"
              value={filter}
              onChange={filterOnChange}/>
        </div>
        <div className="text-center mt-2">
            <input type="checkbox"
                     id="onlyStock" 
                     className="pl-3"
                     checked={showOnlyInStock}
                     onChange={showOnlyInStockChangeHandler}/>
            <label htmlFor="onlyStock">Show product only in Stock</label>
        </div>
    </div>)
}