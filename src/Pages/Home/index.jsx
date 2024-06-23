import { useContext } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Home() {

    const context = useContext(ShoppingCartContext);




    return (


        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-4">
                <h1 className='font-medium text-xl'>Excliusive Products</h1>
            </div>

            <div className='relative flex items-center justify-center mb-8'>
                <MagnifyingGlassIcon className='absolute left-3 w-5 h-5 text-gray-400 '/>
                <input 
                    type="text" 
                    placeholder='Search a product' 
                    className='rounded-lg border border-gray-300 w-80 p-3 px-10 focus:outline-none items-center'
                    onChange={ (event) => context.setSearchByTitle(event.target.value) }
                />
            </div>

            <div className='grid gap-7 grid-cols-4 w-full max-w-screen-lg'>

                {
                    context.items?.map( (item) => (
                        <Card key={item.id} data={item}/>
                    ))
                }
            </div>
            <ProductDetail/>
        </Layout>
        

    )
}

export default Home;