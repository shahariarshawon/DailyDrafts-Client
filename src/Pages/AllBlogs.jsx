import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router";
import BlogCard from "../Components/BlogCard/BlogCard";

const blogs = [
  {
    title: "The Art of Mindful Living",
    image: "https://source.unsplash.com/random/600x400?mindfulness",
    category: "Lifestyle",
    shortDesc: "Learn how mindfulness can transform your daily habits.",
  },
  {
    title: "10 Must-Visit Cities in Europe",
    image: "https://source.unsplash.com/random/600x400?travel",
    category: "Travel",
    shortDesc:
      "Explore breathtaking European destinations perfect for your next adventure.",
  },
  {
    title: "Top 5 Productivity Tools in 2025",
    image: "https://source.unsplash.com/random/600x400?technology",
    category: "Tech",
    shortDesc: "Boost your workflow with these powerful tools and apps.",
  },
  // add more blogs...
];

const AllBlogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogs.filter(
    (blog) =>
      (category === "All" || blog.category === category) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className=" min-h-screen px-4 pt-30 md:px-16 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        All Blog Posts
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
        {/* Search */}
        <div className="flex items-center w-full md:w-1/2 bg-white rounded-lg shadow-md px-4 py-2">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter className="text-gray-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-md bg-white text-gray-700"
          >
            <option>All</option>
            <option>Lifestyle</option>
            <option>Travel</option>
            <option>Tech</option>
          </select>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <BlogCard blog={blog} key={index}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
