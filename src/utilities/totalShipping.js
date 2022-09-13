

const totalShipping = (shippings) => {
    const sumOfShipping = shippings.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sumOfShipping
};


export default totalShipping;