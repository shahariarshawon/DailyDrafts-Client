import React, { useState } from "react";

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    category: "",
    shortDesc: "",
    longDesc: "",
  });

  const categories = ["Technology", "Health", "Lifestyle", "Travel", "Education"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Blog:", formData);
    // You can integrate this with Firebase, MongoDB, etc.
  };

  return (
    <div className="pt-40 flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl space-y-6 border border-purple-200"
      >
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6 animate-fade-in-up">
          Submit Your Blog
        </h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Short Description</label>
          <input
            type="text"
            name="shortDesc"
            value={formData.shortDesc}
            onChange={handleChange}
            placeholder="A brief summary of your blog"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Long Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Long Description</label>
          <textarea
            name="longDesc"
            value={formData.longDesc}
            onChange={handleChange}
            rows="5"
            placeholder="Write your full blog content here..."
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white py-3 font-bold rounded-md shadow-lg transition-all duration-300 hover:scale-105"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddForm;
