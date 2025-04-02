import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RootLayout from "./RootLayout";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/:id",
        element: <ProductScreen />,
      },
      {
        path: "/cart/:id",
        element: <CartScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/shipping",
        element: <ShippingScreen />,
      },
      {
        path: "/payment",
        element: <PaymentScreen />,
      },
      {
        path: "/placeorder",
        element: <PlaceOrderScreen />,
      },
      {
        path: "/order/:id",
        element: <OrderScreen />,
      },
      {
        path: "/admin/userlist",
        element: <UserListScreen />,
      },
      {
        path: "/admin/user/:id/edit",
        element: <UserEditScreen />,
      },
      {
        path: "/admin/productlist",
        element: <ProductListScreen />,
      },
      { 
        path: "/admin/product/:id/edit",
        element: <ProductEditScreen />
      },
      {
        path: "/admin/orderlist",
        element: <OrderListScreen/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
