import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://blog-server-khaki-eta.vercel.app/wishlist") 
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((err) => console.error("Failed to fetch wishlist:", err));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 px-4 md:px-16 py-30">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10 animate-pulse">
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No items yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-purple-300 transition duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={blog.photoURL}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5 space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                  {blog.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.shortDes}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <img
                    src={blog.userPhoto}
                    alt={blog.userName}
                    className="w-8 h-8 rounded-full border-2 border-purple-300 object-cover"
                  />
                  <div className="text-sm">
                    <p className="text-gray-800">{blog.userName}</p>
                    <p className="text-gray-400 text-xs">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/blog-details/${blog.blogId}`}
                  className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-800 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
