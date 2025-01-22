"use client";
import { useState } from "react";
import FilterProduct from "./FilterProduct";
import productsData from "./ProductsData";
import ProductTable from "./ProductTable";
import groupProductByCategory from "./ProductUtil";

export default function ProductList(){

    const [data, setData] = useState(productsData);

    let group = groupProductByCategory(data);
    console.log("Group , ", group);
    let categories = Object.entries(group);
    console.log("categories :", categories)

    const handleFilterChange = (filterParams)=> {
        console.log("Filter Change", filterParams);
        let filterData = productsData;
        if(filterParams.filter){
            filterData = filterData.filter(product => product.name.includes(filterParams.filter));
        }

        if (filterParams.showOnlyInStock){
            filterData = filterData.filter(product=> product.stocked == filterParams.showOnlyInStock);
            setData(filterData);
        }
        else{
            setData(filterData);
        }
        
    }

    return (<div>
        <h1 className="underline">Product List </h1>
        <FilterProduct updateFilterChange={handleFilterChange}/>
        <ProductTable categories={categories}/>
        
    </div>)
}