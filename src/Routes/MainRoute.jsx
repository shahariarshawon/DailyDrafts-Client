import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AddForm from "../Pages/AddForm";
import AllBlogs from "../Pages/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist";
import BlogDetails from "../Pages/BlogDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router=createBrowserRouter(
    [
        {
            path:"/",
            Component:MainLayout,
            
            children:[
                {
                    index:true,
                    Component:Homepage,
                },
                {
                    path:'/login',
                    Component:LoginPage,
                },
                {
                    path:'/register',
                    Component:RegisterPage,
                }
                ,{
                    path:"/add-blog",
                    Component:AddForm,
                },
                {
                    path:"all-blogs",
                    Component:AllBlogs,
                },
                {
                    path:"featured-blogs",
                    Component:FeaturedBlogs,
                },
                {
                    path:"wishlist",
                    Component:Wishlist,
                },
                {
                    path:"blog-details",
                    Component:BlogDetails,
                },
                {
                    path:"*",
                    Component:ErrorPage,
                }
            ]
        }
    ]
)