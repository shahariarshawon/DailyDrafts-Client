import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import { Link } from "react-router"; 

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blog-server-khaki-eta.vercel.app/blogs",{
 
    }) 
   
      .then((res) => res.json())
      .then((data) => {
        
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        
        setRecentBlogs(sorted.slice(0, 6));
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className=" py-20 w-3/4 mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12 animate-pulse">
        Fresh Reads
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/all-blogs"
          className="relative inline-block px-4 py-2 text-white bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-purple-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full z-0"></span>
          <span className="relative z-10">View All Blogs</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentBlogs;
