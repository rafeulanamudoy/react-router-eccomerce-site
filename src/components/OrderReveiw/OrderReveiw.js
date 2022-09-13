import React from 'react';
import { useLocation } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

import { deleteItem } from '../../utilities/localDatabase';
import Cart from '../Cart/Cart';
import ReveiwItem from '../ReveiwItem/ReveiwItem';
import "./OrderReveiw.css"

const OrderReveiw = () => {

    const { products } = useProducts()
    const { selectedProduct, setSelectedProduct } = useCart(products)
    // const {selectedProduct ,setSelectedProduct }=useCart()

    console.log(setSelectedProduct)

    const handleDelete = (singleProduct) => {
        // console.log(singleProduct)
        const remainingItem = selectedProduct.filter(product => product.id !== singleProduct.id)
        console.log(remainingItem)
        setSelectedProduct(remainingItem)
        deleteItem(singleProduct.id)

    }
    return (


        <div className='order-reveiw'>
            <div className='order-reveiw-container'>

                <div className='reveiwItem-container'>


                    {
                        selectedProduct?.map(singleProduct =>

                            <ReveiwItem

                                singleProduct={singleProduct}
                                key={singleProduct.id}
                                handleDelete={handleDelete}
                                selectedProduct={selectedProduct}
                                setSelectedProduct={setSelectedProduct}
                            ></ReveiwItem>
                        )
                    }
                </div>

                <div className="order-summery">
                    <Cart
                        cart={selectedProduct}
                        products={products}

                    >
                        <span>Proceed CheckOut</span>
                    </Cart>
                </div>

            </div>

        </div>

    );
};

export default OrderReveiw;