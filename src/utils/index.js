/**
 * This function calculates total price of a new order
 * 
 * @param {Array} products cartProducts: Arra of objects 
 * @returns {number} Total price
 */

export const totalPrice = (products) => {

    let sum = 0;
    products.forEach( product => sum += product.price);
    return sum.toFixed(2);
}