import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleShopButton = () => {


        navigate("/order")
    }
    return (
        <div>



            <h1>this is home page</h1>
            <button onClick={handleShopButton}>shop now</button>




        </div>
    );
};

export default Home;