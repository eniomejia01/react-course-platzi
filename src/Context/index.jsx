import { createContext, useEffect, useState } from 'react';

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

    // Get products
    const [ items, setItems ] = useState(null);

    // Get products by title
    const [ searchByTitle, setSearchByTitle ] = useState(null);
    console.log('searchByTitle:', searchByTitle )

    useEffect( () => {
        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))


    }, []);




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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle

        }}>

            {children}

        </ShoppingCartContext.Provider>
    )
} 