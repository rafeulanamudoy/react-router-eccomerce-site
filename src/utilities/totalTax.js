

const totalTax = (prices) => {
    let total = 0
    for (let price of prices) {
        total = total + price * 0.1
    }
    return total
};

export default totalTax;