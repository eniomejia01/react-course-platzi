import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {

    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length - 1

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
                    No se han añadido ordenes aún
                    </p>

                ) : (
                    context.order?.[index]?.products.map((product) => (

                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.image}
                        price={product.price}
                        />
                    ))
                )}
            </div>
        </Layout>
    );
}

export default MyOrder;