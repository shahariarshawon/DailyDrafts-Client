import React from "react";
import { X } from "lucide-react";
import BlogCard from "../Components/BlogCard/BlogCard";

const wishlistBlogs = [
  {
    id: 1,
    title: "Traveling the World on a Budget",
    image: "https://source.unsplash.com/600x400/?travel",
    category: "Travel",
  },
  {
    id: 2,
    title: "Mindful Eating: A Beginner’s Guide",
    image: "https://source.unsplash.com/600x400/?food",
    category: "Health",
  },
];

const Wishlist = () => {
  return (
    <section className="pt-30 min-h-screen bg-gradient-to-br from-pink-50 to-violet-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-fuchsia-700 mb-10"> My Wishlist</h1>
      {wishlistBlogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">You haven’t added any blogs to your wishlist yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {wishlistBlogs.map(({ id}) => (
            <BlogCard key={id}></BlogCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
