import React from "react";
import { useLoaderData } from "react-router";
import BlogDetailsCard from "../Components/BlogDetailsCard/BlogDetailsCard";

const BlogDetails = () => {
    const blog=useLoaderData();
    //  console.log("blogdetailscard",blog)

  return (
   <section className="py-30 bg-gradient-to-br from-pink-50 to-violet-100">
     <BlogDetailsCard blog={blog}></BlogDetailsCard>
   </section>
  );
};

export default BlogDetails;
