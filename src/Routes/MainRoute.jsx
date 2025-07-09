import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

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
            ]
        }
    ]
)