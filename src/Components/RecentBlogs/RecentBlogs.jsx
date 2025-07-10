import React, { useState } from "react";
import { Heart, Share2, ChevronDown, MoreVertical } from "lucide-react";

const BlogAuthorCard = ({
  name = "Amelia Laurent",
  date = "July 6, 2025",
  topic = "Lifestyle & Wellness",
  image = "https://source.unsplash.com/random/600x400?lifestyle",
  avatar = "A",
  bio = "Amelia writes about intentional living, self-care, and sustainable fashion from a modern European perspective.",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white  transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center font-bold text-lg">
            {avatar}
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 ">{name}</h2>
            <p className="text-sm text-gray-500">{topic}</p>
          </div>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-500 " />
      </div>

      {/* Image */}
      <img className="w-full h-44 object-cover" src={image} alt={name} />

      {/* Date */}
      <div className="px-4 pt-3 text-sm text-gray-500 ">
        Author since: {date}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-3">
          <button className="text-red-500 hover:text-red-600 transition-all">
            <Heart size={18} />
          </button>
          <button className="text-gray-600 hover:text-gray-800 ">
            <Share2 size={18} />
          </button>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          } text-gray-600 ]`}
        >
          <ChevronDown size={18} />
        </button>
      </div>

      {/* Collapse Bio */}
      {expanded && (
        <div className="px-4 pb-4 text-sm text-gray-700 ">
          <p>
            <span className="font-semibold text-gray-800 ">About:</span>{" "}
            {bio}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogAuthorCard;
