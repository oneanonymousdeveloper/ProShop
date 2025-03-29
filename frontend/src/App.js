
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import RootLayout from './RootLayout';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const router = createBrowserRouter([{
  path : '/',
  element : <RootLayout/>,
  children:[{
    path:'/',
    element: <HomeScreen/>
  },{
    path:'/:id',
    element: <ProductScreen/>
  },{
    path:'/cart/:id',
    element: <CartScreen/>
  },{
    path:'/login',
    element: <LoginScreen/>
  }]
}])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
