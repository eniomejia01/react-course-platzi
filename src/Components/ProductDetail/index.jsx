import { XMarkIcon } from '@heroicons/react/24/solid';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const ProductDetail = () => {

    
    const context = useContext(ShoppingCartContext);
    // console.log('product to show', context.productToShow)

    return(
        <aside 
            className={` ${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
            
        >
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>

                    <XMarkIcon 
                        className='size-6 text-black cursor-pointer'
                        onClick={() => context.closeProductDetail()}
                    >

                    </XMarkIcon>

                </div>
            </div>

            <figure className='px-6'>
                <img 
                    className='w-60 h-60 rounded-lg object-contain' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} 
                />
            </figure>

            <p className='p-6 flex flex-col'>
                <span className='font-medium text-2xl mb-3'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm mt-3'>{context.productToShow.description} </span>
            </p>
            
        </aside>
    )
}

export default ProductDetail

