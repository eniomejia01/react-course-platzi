import { SubtotalPrice } from '../../utils';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';


const OrderCard = (props) => {


        const { 
            id, 
            title, 
            imageURL, 
            price, 
            quantity, 
            handleDelete, 
            increaseQuantity, 
            decreaseQuantity 
        } = props

    let renderXMarkIcon;

        // Calcular el subtotal para este producto
    const subtotal = SubtotalPrice({ price, quantity });

    return(

        <div className="flex justify-between items-center mb-5">

            <div className='flex items-center gap-5 w-[60%]'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-contain' src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light w-40 mr-4'>{title}</p>
            </div>

            {/*INCREMENTAR Y DECREMENTAR */}
            <div className='flex items-center  w-[70%] border p-1'>

                <div className="flex items-center m-auto border-gray-100 gap-2">
                    <span 
                        className="cursor-pointer rounded-full "
                        onClick={() => decreaseQuantity(id)}
                    ><MinusIcon className='size-4 rounded-full bg-gray-100 hover:bg-gray-500 hover:text-white'></MinusIcon></span>

                    <span className="text-xl h-8 w-4  text-center outline-none  ">{quantity}</span>

                    <span 
                        className="cursor-pointer rounded-r"
                        onClick={() => increaseQuantity(id)}
                    >  <PlusIcon className='size-4 rounded-full bg-gray-100 hover:bg-gray-500 hover:text-white'></PlusIcon></span>
                    
                </div>

            </div>

            <div className='flex items-center  w-[0%] ml-2'>
                <p className='text-lg font-medium '>{subtotal}</p>
            </div>

            <div className='flex w-full justify-end ml-4'>
                { renderXMarkIcon}

                {
                    handleDelete &&                 
                    <TrashIcon
                    onClick={()=>handleDelete(id)}
                    className="h-4 w-4 text-gray-700 cursor-pointer ml-14 hover:text-gray-400"/>
                }
            </div>




        </div>

        
    )

}

export default OrderCard
