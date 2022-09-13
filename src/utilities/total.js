

const total = (price) => {

    const priceArray = [...price]
    const sumOfProduct = priceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    return sumOfProduct

};

export default total;