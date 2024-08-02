/**
 * This function calculates total price of a new order
 * 
 * @param {Array} products cartProducts: Arra of objects 
 * @returns {number} Total price
 */


export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        sum += product.price * product.quantity
    });
    
    return sum.toFixed(2);
}
export const SubtotalPrice = (products) => {
    if (!Array.isArray(products)) {
        // Si solo es un producto, devuelve el precio multiplicado por la cantidad
        return (products.price * (products.quantity || 1)).toFixed(2);
    } else {
        // Si es un array de productos, calcula el total
        const sum = products.reduce((total, product) => {
            return total + (product.price * (product.quantity || 1));
        }, 0);
        return sum.toFixed(2);
    }
}
