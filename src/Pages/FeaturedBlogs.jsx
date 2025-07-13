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
    <section className="py-30 min-h-screen bg-gradient-to-r from-rose-50 to-indigo-100 px-4 md:px-16 ">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12 animate-pulse">
         Featured Blogs 
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table w-full bg-white">
          <thead className="bg-indigo-200 text-indigo-800 font-semibold text-lg">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Word Count</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id} className="hover:bg-indigo-50 transition-all">
                <td className="font-bold">{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.userName || "N/A"}</td>
                <td>{blog.category}</td>
                <td>{blog.wordCount}</td>
                <td>
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
    </section>
  );
};

export default FeaturedBlogs;
