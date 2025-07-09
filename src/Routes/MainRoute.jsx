import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";

export const router=createBrowserRouter(
    [
        {
            path:"/",
            Component:MainLayout,
            children:[
                {
                    index:true,
                    Component:Homepage,
                }
            ]
        }
    ]
)