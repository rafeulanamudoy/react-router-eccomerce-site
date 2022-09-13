import React, { useEffect, useState } from 'react';
import "./Cart.css"
import { getItem, removeItem } from '../../utilities/localDatabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';



const Cart = (props) => {
    //  console.log(props)
    const { products, cart, children } = props;
    const { selectedProduct, setSelectedProduct } = useCart(products, cart)
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0)
    const navigate = useNavigate()












    useEffect(() => {

        //console.log(selectedProduct)
        let totalItems = 0;
        let totalCost = 0;
        let shippingCost = 0;
        let tax = 0
        selectedProduct.map(item => {

            // console.log(item.quantity, item)
            totalItems = totalItems + item.quantity;
            totalCost = totalCost + (item.price * item.quantity)
            shippingCost = shippingCost + item.shipping;
            tax = tax + item.price * 0.1;

        })
        const grandTotal = totalCost + shippingCost + tax;

        setTotalPrice(totalCost)
        setTotalProduct(totalItems)
        setTotalShipping(shippingCost)
        setTotalTax(tax.toFixed(2))
        setGrandTotal(grandTotal)
    }, [selectedProduct, totalShipping, totalTax, totalProduct, totalPrice])


    const clearCart = () => {
        // console.log("clicked")
        removeItem()
        setSelectedProduct([])
    }

    const reveiwOrder = () => {
        navigate("/orderReveiw")

    }









    return (
        <div className='cart-container'>
            <h1 className='order-summery-text'>Order Summery</h1>
            <div className='cart-items-info'>

                <p>Selected Items: {totalProduct}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping charge: ${totalShipping}</p>
                <p>Tax: ${totalTax}</p>
                <h3>Grand Total: {grandTotal}</h3>

            </div>
            <div className='cart-button'>
                <button onClick={clearCart} >
                    <span className='button-text'>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button onClick={reveiwOrder} >
                    <span className='button-text'> {children} </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>


        </div >
    );
};

export default Cart;