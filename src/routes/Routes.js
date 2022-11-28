import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../dashboard/MyOrders/MyOrders";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Categories/Categories";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/about',
                element:<Blogs></Blogs>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/signin',
                element:<SignIn></SignIn>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
           }
        ]
    }
])
export default router