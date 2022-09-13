import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;




    return (
        <div className='single-product' >
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <h5 className='product-price'>Price:{price}</h5>
                <p className='.product-rating-manuufacturer'>Manufacturer:{seller}</p>
                <p className='.product-rating-manuufacturer'>Rating:{ratings} star</p>
            </div>
            <button onClick={() => props.handleEvent(props.product)} className='btn-cart'>

                <span >Add to cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />

            </button>
        </div>
    );
};

export default Products;