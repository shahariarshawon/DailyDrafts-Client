import React from "react";
import BlogCard from "../BlogCard/BlogCard";

const RecentBlogs = () => {
  return (
    <div className="my-10 w-3/4 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Fresh Reads
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default RecentBlogs;
