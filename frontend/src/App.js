
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import RootLayout from './RootLayout';
import ProductScreen from './screens/ProductScreen';

const router = createBrowserRouter([{
  path : '/',
  element : <RootLayout/>,
  children:[{
    path:'/',
    element: <HomeScreen/>
  },{
    path:'/:id',
    element: <ProductScreen/>
  }]
}])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
