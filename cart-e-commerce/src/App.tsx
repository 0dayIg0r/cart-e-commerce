import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Layout from "./components/layout";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Details/>
      }
    ],
  },
]);

export { router };
