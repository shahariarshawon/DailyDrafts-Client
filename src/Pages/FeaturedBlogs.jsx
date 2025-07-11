import React from "react";
import { Heart, ArrowRight } from "lucide-react";
import BlogCard from "../Components/BlogCard/BlogCard";

const featuredBlogs = [
  {
    id: 1,
    title: "Embracing Minimalism",
    image: "https://source.unsplash.com/600x400/?minimalism",
    description: "Explore how a minimalist lifestyle can bring clarity and peace.",
    category: "Lifestyle",
  },
  {
    id: 2,
    title: "Tech for the Future",
    image: "https://source.unsplash.com/600x400/?technology",
    description: "A deep dive into emerging technologies shaping our world.",
    category: "Technology",
  },
  {
    id: 3,
    title: "Healthy Habits for Life",
    image: "https://source.unsplash.com/600x400/?health",
    description: "Simple changes that can lead to lifelong wellness.",
    category: "Health",
  },
];

const FeaturedBlogs = () => {
  return (
    <section className="pt-30 min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-700"> Featured Blogs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {featuredBlogs.map((id) => (
          <BlogCard key={id}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
