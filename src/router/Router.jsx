import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from '../layout/HomeLayout';
import ErrorPage from '../shared/ErrorPage';
import Home from '../pages/Home';
import All_Toys from '../pages/All_Toys';
import My_Toys from '../pages/My_Toys';
import Add_Toy from '../pages/Add_Toy';
import Blog from '../pages/Blog';
import Modal from '../components/Modal';
import SignLayout from '../layout/SignLayout';
import ProtectedRoute from '../protectRoutes/ProtectedRoute';
import Update from '../pages/Update';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/all_toys',
                element: <All_Toys/>,
                loader:()=>fetch('https://disney-zone-server.vercel.app/toys')
            },
            {
                path: '/my_toys',
                element: <ProtectedRoute><My_Toys/></ProtectedRoute>

            },
            {
                path: '/add_toy',
                element: <ProtectedRoute><Add_Toy/></ProtectedRoute>
            },
            {
                path: '/blog',
                element: <Blog/>,
                loader:()=>fetch('https://disney-zone-server.vercel.app/blogs')
            },
            {
                path: "toys/:id",
                element:<ProtectedRoute><Modal/></ProtectedRoute>,
                loader:({params})=>fetch(`https://disney-zone-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "update/:id",
                element: <ProtectedRoute><Update/></ProtectedRoute>,
                 loader:({params})=>fetch(`https://disney-zone-server.vercel.app/toys/${params.id}`)
              },
            {
                path: 'signLayout',
                element: <SignLayout/>
            },
        ]
    },


])

export default router