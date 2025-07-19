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
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import FallbackElement from "../Components/FallbackElement/FallbackElement";
import UpdateBlogPage from "../Pages/UpdateBlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <FallbackElement></FallbackElement>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddForm></AddForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-blogs",
        Component: AllBlogs,
        loader: () => fetch("https://blog-server-khaki-eta.vercel.app/blogs"),
      },
      {
        path: "featured-blogs",
        element: (
          <PrivateRoute>
            <FeaturedBlogs></FeaturedBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "blog-details/:id",
        Component: BlogDetails,
        loader: ({ params }) =>
          fetch(`https://blog-server-khaki-eta.vercel.app/blogs/${params.id}`, {
            credentials: "include", // <-- This makes fetch send cookies!
          }).then((res) => {
            if (!res.ok) {
              throw new Response("Failed to load blog details", {
                status: res.status,
              });
            }
            return res.json();
          }),
      },
      {
        path: "/update-post/:_id",
        element: (
          <PrivateRoute>
            <UpdateBlogPage></UpdateBlogPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://blog-server-khaki-eta.vercel.app/blogs/${params._id}`),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    hydrateFallbackElement: <FallbackElement></FallbackElement>,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: RegisterPage,
      },
    ],
  },
]);
