import React from "react";
import BlogCard from "../Components/BlogCard/BlogCard";
import { useLoaderData } from "react-router";



const AllBlogs = () => {
   const blogs = useLoaderData();
  // console.log("Fetched blogs:", blogs);

  return (
    <section className="bg-gradient-to-br from-pink-50 to-violet-100 min-h-screen px-4 py-30 md:px-16 bg-gray-50">
      {/*  Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        All Blog Posts
      </h1>

      

      {/* Blog cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog._id}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
