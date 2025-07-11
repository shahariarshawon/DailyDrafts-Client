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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/add-blog",
        Component: AddForm,
      },
      {
        path: "/all-blogs",
        Component: AllBlogs,
        loader: () => fetch("http://localhost:3000/blogs")
      },
      {
        path: "featured-blogs",
        Component: FeaturedBlogs,
      },
      {
        path: "wishlist",
        Component: Wishlist,
      },
      {
        path: "blog-details/:id",
        Component: BlogDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
