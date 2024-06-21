import { useContext } from "react";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {

    const context = useContext(ShoppingCartContext);

    return (
      // <Layout>
      //     MyOrder

      //     <div className='flex flex-col w-80'> {/* flex-1 coloca elementos en la parte inferior de la pantalla */}

      //         {
      //             context.order?.slice(-1)[0].products.map( product => (
      //                 <OrderCard
      //                     key = {product.id}
      //                     id = {product.id}
      //                     title = {product.title}
      //                     imageURL = {product.image}
      //                     price = {product.price}
      //                 />
      //             ))
      //         }

      //     </div>
      // </Layout>

        <Layout>
            MyOrder
            <div className="flex flex-col w-96 shadow-md p-5">
                {context.order.length <= 0 ? (

                    <p className="font-bold text-2xl text-center mt-4">
                    No se han añadido ordenes aún
                    </p>

                ) : (
                    context.order
                    ?.slice(-1)[0]
                    .products.map((product) => (
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

export default MyOrder