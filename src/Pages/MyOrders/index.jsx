import { useContext } from "react";
import Layout from "../../Components/Layout"
import { Link } from "react-router-dom";
import  OrdersCard  from '../../Components/OrdersCard';
import { ShoppingCartContext } from "../../Context";

function MyOrders() {

    const context = useContext(ShoppingCartContext);

    return (


        <Layout>
            <div className="flex w-80 items-center justify-center relative ">
                <h1>My Orders</h1>
            </div>
            
            {
                context.order.map( (order, index) => (

                    <Link key={index} to={`/my-orders/${index}`}>
                    
                        <OrdersCard 

                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts} 
                            date = {order.date}
                        />
                    </Link>

                ))
            }

        </Layout>
        

    )
}

export default MyOrders