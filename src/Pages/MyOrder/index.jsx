import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

function MyOrder() {


    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length - 1

        // Calculate the total price for the current order
        const orderTotalPrice = context.order[index] 
        ? totalPrice(context.order[index].products)
        : 0;


    // return (

    //     <Layout>
    //         <div className="flex w-80 items-center justify-center relative mb-5">
    //             <Link to='/my-orders' className="absolute left-0">
                
    //                 <ChevronLeftIcon className="h-4 w-4 text-black cursor-pointer"/>
    //             </Link>
    //             <h1>My Orde</h1>
    //         </div>
    //         <div className="flex flex-col w-96 shadow-md p-5">
    //             {context.order.length <= 0 ? (

    //                 <p className="font-bold text-2xl text-center mt-4">
    //                 No se han añadido ordenes aún
    //                 </p>

    //             ) : (
    //                 context.order?.[index]?.products.map((product) => (

    //                     <OrderCard
    //                     key={product.id}
    //                     id={product.id}
    //                     title={product.title}
    //                     imageURL={product.image}
    //                     // price={product.price}

    //                     />
    //                 ))
    //             )}

    //             <div className='px-10 mb-6'>
    //                 <p className='flex justify-between items-center mb-2'>
    //                     <span className='font-light'>Total:</span>
    //                     <span className='font-medium text-2xl'>${orderTotalPrice}</span>
    //                 </p>
    //             </div>

    //         </div>
    //     </Layout>
    // );

    const OrderItem = ({ id, title, imageURL, price }) => (
        <div className='flex items-center gap-5 mb-5'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-contain' src={imageURL} alt={title} />
            </figure>
            <p className='text-sm font-light w-40 mr-4'>{title}</p>

            <div className='flex items-center   ml-2'>
                <p className='text-lg font-medium '>{price}</p>
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-5">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-4 w-4 text-black cursor-pointer"/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-96 shadow-md p-5">
                {context.order.length <= 0 ? (
                    <p className="font-bold text-2xl text-center mt-4">
                        No products in this order
                    </p>
                ) : (
                    
                        context.order?.[index]?.products.map((product) => (
                            <OrderItem
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageURL={product.image}
                                price={product.price}
                            />
                        ))
                    
                )}
                <div className='px-6 mb-6'>
                    <p className='flex justify-between items-center'>
                        <span className='font-light'>Total:</span>
                        <span className='font-medium text-2xl'>${orderTotalPrice}</span>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default MyOrder;