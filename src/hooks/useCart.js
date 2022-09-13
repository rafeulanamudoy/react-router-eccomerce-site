import { useEffect, useState } from "react";
import { getItem } from "../utilities/localDatabase";

const useCart = (products, cart) => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const items = getItem()
    useEffect(() => {





        let arrayOfSelectedItem = [];
        for (let id in items) {

            products?.map(product => {

                if (product.id === id) {

                    //arrayOfSelectedItem.push(product)
                    product.quantity = items[id]

                    arrayOfSelectedItem.push(product);

                }
                else {
                    return
                }

            })
        }
        //  console.log(arrayOfSelectedItem)
        setSelectedProduct(arrayOfSelectedItem)

    }, [products, cart])
    return { selectedProduct, setSelectedProduct }
}

export default useCart