import { XMarkIcon } from '@heroicons/react/16/solid';

const OrderCard = (props) => {

    const { id, title, imageURL, price, handleDelete } = props;
    // let renderXMarkIcon;
    // if( handleDelete) {
    //     renderXMarkIcon = <XMarkIcon className='size-6 text-black cursor-pointer' onClick={ () => handleDel (id)} > </XMarkIcon>
    // }

    return(

        <div className="flex justify-between items-center mb-5">

            <div className='flex items-center gap-5'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-contain' src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light w-full mr-4'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>

                {/* { renderXMarkIcon} */}

                {
                    handleDelete &&                 
                    <XMarkIcon
                    onClick={()=>handleDelete(id)}
                    className="h-4 w-4 text-black cursor-pointer "/>
                }

            </div>


        </div>
    )

}

export default OrderCard