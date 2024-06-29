import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';


const CheckoutSideMenu = () => {

    
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {


        const orderToAdd = {

            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setSearchByTitle(null);
        context.closeCheckoutSideMenu();
    }

    return(
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
            
        >
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>

                    <XMarkIcon 
                        className='size-6 text-black cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}
                    >

                    </XMarkIcon>

                </div>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'> {/* flex-1 coloca elementos en la parte inferior de la pantalla */}

                {
                    context.cartProducts.map( product => (
                        <OrderCard
                            key = {product.id}
                            id = {product.id}
                            title = {product.title} 
                            imageURL = {product.image}
                            price = {product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }

            </div>

            <div className='px-10 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${ totalPrice(context.cartProducts) }</span>
                </p>

                <Link to='/my-orders/last'>

                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={ () => handleCheckout() }>Checkout</button>

                </Link>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu;

