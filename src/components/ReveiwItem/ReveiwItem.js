import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReveiwItem.css"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteItem } from "../../utilities/localDatabase";

const ReveiwItem = (props) => {
    const { img, name, shipping, price, quantity, id } = props?.singleProduct;
    // console.log(props, "hello")
    const { handleDelete, selectedProduct, setSelectedProduct } = props;



    return (

        <div className='reveiw-sub-container'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h3 title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h3>
                <p>Price: {price}</p>
                <p>shipping: {shipping}</p>
                <p>Quantity:{quantity}</p>
            </div>
            <div onClick={() => handleDelete(props?.singleProduct)} className='delete-button'>
                <FontAwesomeIcon icon={faTrashAlt} />

            </div>
        </div>

    );
};

export default ReveiwItem;