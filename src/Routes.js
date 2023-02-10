import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CartPage from './Views/CartPage';
import DetailPage from './Views/Detail';
import Index from './Views/Home';

const Routes = () => {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index />,
        },
        {
            path: "/product/:id",
            element: <DetailPage />,
        },
        {
            path: "/cart",
            element: <CartPage />,
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default Routes