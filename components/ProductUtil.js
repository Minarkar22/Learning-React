

export default function groupProductByCategory(products){
    let group = {};
    for (const product of products){
        if(!group[product.category]){
            group[product.category] = [product];
        }
        else {
            group[product.category].push(product);
        }
    }

    return group;
}