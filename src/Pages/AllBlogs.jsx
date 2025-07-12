import React, { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard/BlogCard";
import { useLoaderData } from "react-router";

const AllBlogs = () => {
  const blogs = useLoaderData();

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Get unique categories from blogs
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory, blogs]);

  return (
    <section className=" bg-gradient-to-br from-pink-50 to-violet-100 min-h-screen px-4 py-30 md:px-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        All Blog Posts
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Blog cards */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No blogs found.</p>
      )}
    </section>
  );
};

export default AllBlogs;
