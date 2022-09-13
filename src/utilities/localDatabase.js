const getItem = () => {

    return JSON.parse(localStorage.getItem("shopping-cart"));

}

const setItem = (productId) => {
    //   console.log(productId)


    const cart = getItem();
    //console.log(cart)

    let shoppingCart;

    if (cart) {

        shoppingCart = cart
    }
    else {
        shoppingCart = {}
    }

    const quantity = shoppingCart[productId];
    //  console.log(quantity)

    if (quantity) {

        let newQuantity = quantity + 1;
        shoppingCart[productId] = newQuantity;
    }

    else {
        shoppingCart[productId] = 1;
    }








    // console.log(shoppingCart)

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))

}


const removeItem = () => {

    return localStorage.removeItem("shopping-cart")
}


const deleteItem = (id) => {
    console.log(id)
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}


export {

    setItem,
    getItem,
    removeItem,
    deleteItem
}
