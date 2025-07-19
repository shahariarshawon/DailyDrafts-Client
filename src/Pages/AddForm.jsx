import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Components/Loader/Loader";

const AddForm = () => {
  const { user,loading } = use(AuthContext);
  const categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Travel",
    "Education",
  ];
// handle loading state
if (loading || !user) {
  return <Loader />;
}

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const blogData = Object.fromEntries(formData);
    // console.log(blogData);
    blogData.createdAt=new Date();
    // console.log("hello gello",blogData);
    //sending data to the database
    fetch("https://blog-server-khaki-eta.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After databse", data);
         if (data.insertedId) {
          toast.success("Post Submitted Successfully!", {
            position: "top-right",
            autoClose:'2000'
          });
        }
      });
  };

  return (
    <div className="pt-40 flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      <form
        onSubmit={handleSubmitForm}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl space-y-6 border border-purple-200"
      >
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12 animate-pulse">
          Submit Your Blog
        </h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            // value={title}
            placeholder="Enter blog title"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">
            Image URL
          </label>
          <input
            type="url"
            name="photoURL"
            // value={"https://i.postimg.cc/Hs90BBRX/image.png"}
            placeholder="blog image"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">Category</label>
          <select
            name="category"
            // value={formData.category}
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
          <label className="mb-1 font-semibold text-purple-700">
            Short Description
          </label>
          <input
            type="text"
            name="shortDes"
            // value={formData.shortDesc}
            placeholder="A brief summary of your blog"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
            required
          />
        </div>

        {/* Long Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-purple-700">
            Long Description
          </label>
          <textarea
            name="longDes"
            // value={formData.longDesc}
            rows="5"
            placeholder="Write your full blog content here..."
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all resize-none"
            required
          ></textarea>
        </div>
        {/* Poster Photo URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            User Photo URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/photo.jpg"
            name="userPhoto"
            defaultValue={user.photoURL}
            readOnly
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-not-allowed"
            required
          />
        </div>
        {/* poster name */}
        <div>
          <label className="block text-sm font-medium mb-1">User Name</label>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            name="userName"
            className="w-full bg-gray-100 border rounded-md px-4 py-2 text-gray-600 cursor-not-allowed"
          />
        </div>
        {/* poster email */}
        <div>
          <label className="block text-sm font-medium mb-1">User Email</label>
          <input
            type="email"
            defaultValue={user.email}
            name="email"
            readOnly
            className="w-full bg-gray-100 border rounded-md px-4 py-2 text-gray-600 cursor-not-allowed"
          />
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
