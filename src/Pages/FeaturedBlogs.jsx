import React, {  useEffect, useState } from "react";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        const blogsWithWordCount = data.map((blog) => ({
          ...blog,
          wordCount: blog.longDes?.split(/\s+/).filter(Boolean).length || 0,
        }));

        const top10 = blogsWithWordCount
          .sort((a, b) => b.wordCount - a.wordCount)
          .slice(0, 10);

        setBlogs(top10);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
   <section className="py-20 min-h-screen bg-gradient-to-r from-rose-50 to-indigo-100 px-4 md:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10 animate-pulse">
    Featured Blogs
  </h2>

{blogs.length === 0 ? (
  <p className="text-center text-gray-500 mt-10">No featured blogs available.</p>
) : (
  <div className="overflow-x-auto shadow-lg rounded-lg border border-purple-200">
    <table className="min-w-full table-auto bg-white text-sm md:text-base">
      <thead className="bg-indigo-200 text-indigo-800 font-semibold">
        <tr className="text-left">
          <th className="py-3 px-4">#</th>
          <th className="py-3 px-4">Title</th>
          <th className="py-3 px-4">Author</th>
          <th className="py-3 px-4">Category</th>
          <th className="py-3 px-4 whitespace-nowrap">Word Count</th>
          <th className="py-3 px-4 whitespace-nowrap">Date</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => (
          <tr key={blog._id} className="hover:bg-indigo-50 transition-all border-t border-gray-100">
            <td className="py-2 px-4 font-bold">{index + 1}</td>
            <td className="py-2 px-4">{blog.title}</td>
            <td className="py-2 px-4">{blog.userName || "N/A"}</td>
            <td className="py-2 px-4">{blog.category}</td>
            <td className="py-2 px-4 text-center">{blog.wordCount}</td>
            <td className="py-2 px-4">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
  

  {/* Optional: mobile scroll hint */}
  <p className="text-center text-sm text-gray-500 mt-4 lg:hidden">
    Swipe to view more →
  </p>
</section>

  );
};

export default FeaturedBlogs;
