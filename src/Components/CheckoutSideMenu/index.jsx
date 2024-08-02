import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';


const CheckoutSideMenu = () => {

    
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setOrder, setSearchByTitle, order } = useContext(ShoppingCartContext);

        const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {


        const orderToAdd = {

            date: new Date().toLocaleDateString(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        setSearchByTitle(null);
        closeCheckoutSideMenu();
    }

    const increaseQuantity = (id, quantity) => {
        const productCart = cartProducts.find(items  => items .id === id);
        productCart.quantity += 1;
        setCartProducts([...cartProducts]); // Causar un renderizado actualizando el estado
    }
    
    const decreaseQuantity = (id, quantity) => {
        const deletedProduct = cartProducts.filter(product => product.id != id);
        const productCart = cartProducts.find(items  => items .id === id);
        productCart.quantity -= 1;
        setCartProducts([...cartProducts]); 
        if (productCart.quantity === 0){
            setCartProducts(deletedProduct);
        } 
    }

    return(
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col md:right-0 fixed border border-black rounded-lg bg-white xs:w-1/3 xss:w-72 left-1/2 md:left-auto  xs:transform md:transform-none xs:-translate-x-1/2 md:-translate-x0  mt-10`}
            
        >
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>

                    <XMarkIcon 
                        className='size-6 text-black cursor-pointer'
                        onClick={() => closeCheckoutSideMenu()}
                    >

                    </XMarkIcon>

                </div>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'> {/* flex-1 coloca elementos en la parte inferior de la pantalla */}

                {
                    cartProducts.map( product => (
                        <OrderCard
                            key = {product.id}
                            id = {product.id}
                            title = {product.title} 
                            imageURL = {product.image}
                            price = {product.price}
                            handleDelete={handleDelete}
                            quantity={product.quantity}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    ))
                }

            </div>

            <div className='px-10 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${ totalPrice(cartProducts) }</span>
                </p>

                <Link to='/my-orders/last'>

                    <button className='bg-black py-3 text-white w-full rounded-lg mb-10' onClick={ () => handleCheckout() }>Checkout</button>

                </Link>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu

