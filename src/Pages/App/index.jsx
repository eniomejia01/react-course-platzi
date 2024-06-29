import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css'


//Definir las rutas
const AppRoutes = () => {

	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/:category', element: <Home /> },
		{ path: '/mensClothing', element: <Home /> },
		{ path: '/electronics', element: <Home /> },
		{ path: '/jewelery', element: <Home /> },
		{ path: '/womensClothing', element: <Home /> },
		{ path: '/others', element: <Home /> },
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:id', element: <MyOrder /> },
		{ path: '/sign-in', element: <Signin /> },
		{ path: '/*', element: <NotFound /> },
	])

	return routes
}


const  App = () => {

	return (

		<ShoppingCartProvider>

			<BrowserRouter> {/* Permite la navegación entre diferentes componentes/páginas sin recargar la página completa.*/}
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
			</BrowserRouter>
			
		</ShoppingCartProvider>
	)
}

export default App
