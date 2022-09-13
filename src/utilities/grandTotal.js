

const grandTotal = (totalAmount) => {

    const totalSum = totalAmount.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return totalSum

};

export default grandTotal;