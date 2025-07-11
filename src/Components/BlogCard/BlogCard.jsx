import React from "react";
import { Heart, Share2, MoreVertical } from "lucide-react";
import { Link } from "react-router";

const BlogCard = ({
  name = "Amelia Laurent",
  date = "July 6, 2025",
  image = "https://i.postimg.cc/8Cj99fgW/image.png",
  avatar = "A",
  blogTitle = "10 Daily Habits to Boost Your Productivity",
  category = "Lifestyle",
  shortDesc = "Discover how small changes in your routine can lead to massive improvements in your daily performance and well-being.",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-purple-300 transition duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={blogTitle}
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
          {blogTitle}
        </h3>

        <p className="text-gray-600 text-sm">{shortDesc}</p>

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-200 text-purple-700 font-semibold flex items-center justify-center rounded-full">
              {avatar}
            </div>
            <div className="text-sm">
              <p className="text-gray-800">{name}</p>
              <p className="text-gray-400 text-xs">{date}</p>
            </div>
          </div>

          <Link
            to="/blog-details"
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
