import React from "react";
import { Heart, Share2, MoreVertical } from "lucide-react";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  const {
    title,
    _id,
    photoURL,
    category,
    shortDes,
    userName,
    createdAt,
    userPhoto,
  } = blog;
  // console.log("blog", blog);
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-purple-300 transition duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="relative">
        <img
          src={photoURL}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-100">
            <Heart size={18} className="text-pink-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-100">
            <Share2 size={18} className="text-blue-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-purple-100">
            <MoreVertical size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
          {category}
        </span>

        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition">
          {title}
        </h3>

        <p className="text-gray-600 text-sm">{shortDes}</p>

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-2">
            <img
              src={userPhoto}
              alt={userName}
              className="w-8 h-8 rounded-full object-cover border-2 border-purple-300"
            />
            <div className="text-sm">
              <p className="text-gray-800">{userName}</p>
              <p className="text-gray-400 text-xs">
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <Link
            to={`/blog-details/${_id}`}
            className="text-purple-600 font-medium hover:text-purple-800 transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
