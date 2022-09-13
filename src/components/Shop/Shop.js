import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { deleteItem, getItem, setItem } from '../../utilities/localDatabase';

import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"
const Shop = () => {


    const [cart, setCart] = useState({})
    const { products } = useProducts()



    const handleproduct = (product) => {

        //  console.log(product)

        setItem(product.id)
        // cart.push(product)
        // const newCart = [...cart, product]
        setCart(getItem())
        // localDatabase(product.id)  
        // console.log(cart)

    }




    // useEffect(() => {


    //     fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             //console.log(data)
    //         })
    // }, [])



    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product =>
                        <Products
                            key={product.id}
                            product={product}
                            handleEvent={handleproduct}
                        ></Products>


                    )
                }
            </div>
            <div className="order-summery">
                <Cart
                    products={products}
                    cart={cart}
                >
                    <span>Reveiw Order</span>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;