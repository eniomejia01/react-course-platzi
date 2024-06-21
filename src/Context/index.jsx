import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //Shoping Cart . Incrment quntity
    const [ count, setCount ] = useState(0);
    
    
    //checkout-side-menu . Open/Close
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    //productDetail . Open/Close
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //productDetail . Show product
    const [ productToShow, setProductToShow ] = useState({});

    //ShpingCart . Add products to cart
    const [ cartProducts, setCartProducts ] = useState([]);

    //Shopping Cart . order
    const [ order, setOrder ] = useState([]);




    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder

        }}>

            {children}

        </ShoppingCartContext.Provider>
    )
} 