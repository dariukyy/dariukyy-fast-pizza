import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Error from "./ui/Error";
import Home from "./ui/Home";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
// const AppLayout = lazy(() => import("./ui/AppLayout"));
// const { action: updateOrderAction } = lazy(
//   () => import("./features/order/UpdateOrder"),
// );
// const Home = lazy(() => import("./ui/Home"));
// const Error = lazy(() => import("./ui/Error"));
// const Menu = lazy(() => import("./features/menu/Menu"));
// const { loader: menuLoader } = lazy(() => import("./features/menu/Menu"));
// const Cart = lazy(() => import("./features/cart/Cart"));
// const CreateOrder = lazy(() => import("./features/order/CreateOrder"));
// const { action: createOrderAction } = lazy(
//   () => import("./features/order/CreateOrder"),
// );
// const Order = lazy(() => import("./features/order/Order"));
// const { loader: orderLoader } = lazy(() => import("./features/order/Order"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
