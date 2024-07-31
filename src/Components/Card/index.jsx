import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {

    const context = useContext(ShoppingCartContext);

    const ShowProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        // context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        // context.openCheckoutSideMenu();
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if( isInCart ){

            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                    // onClick={(event) => addProductsToCart(event, data.data)}
                >
                    <CheckIcon className='size-6 text-white'></CheckIcon>
                </div>
            )
        } else {
            return(

                <div 
                        className='absolute top-0 right-0 flex justify-center items-center bg-gray-100 w-6 h-6 rounded-full m-2 p-1'
                        onClick={(event) => addProductsToCart(event, data.data)}
                    >
                        <PlusIcon className='size-6 text-black'></PlusIcon>
                </div>
            )

        }
    }

    return(
        <div 
            className='bg-white cursor-pointer md:w-56 md:h-96 w-56 h-96 rounded-lg shadow-md mb-9'
            onClick={ () => ShowProduct(data.data)}
        >
            
            
            <figure className='relative mb-3 w-full h-4/5 items-center'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                <img className='md:w-full md:h-full md:object-contain rounded-lg border object-contain w-full h-56' src={data.data.image} alt={data.data.title}/>
                <button className='absolute top-0 left-0 flex justify-center items-center bg-gray-500 bg-opacity-10 hover:bg-opacity-100 rounded-xl m-2 p-1 pl-4 pr-4'>Detalles</button>
                {renderIcon(data.data.id)}
                
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card

