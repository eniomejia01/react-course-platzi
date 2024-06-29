import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';



const Navbar = () => {

    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    
    return (

        <nav className='md:flex md:justify-between md:flex-row hidden justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white '>

            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }    
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/mensClothing'
                        onClick={() => context.setSearchByCategory('men\'s clothing')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/womensClothing'
                        onClick={() => context.setSearchByCategory('women\'s clothing')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Women's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/50'>
                    isma@correo.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }    
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon className='size-6 text-black'></ShoppingCartIcon> 
                    {/* <div>{context.count}</div> */}
                    <span> {context.cartProducts.length}  </span>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;