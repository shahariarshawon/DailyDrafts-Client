import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    photoURL: "",
    shortDes: "",
    longDes: ""
  });

  useEffect(() => {
    fetch(`https://your-api.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setFormData({
          title: data.title,
          category: data.category,
          photoURL: data.photoURL,
          shortDes: data.shortDes,
          longDes: data.longDes
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to load blog.");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://your-api.com/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Blog updated successfully!");
        navigate(`/blogs/${id}`);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to update blog.");
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">Update Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Short Description</label>
          <textarea
            name="shortDes"
            rows="2"
            value={formData.shortDes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Long Description</label>
          <textarea
            name="longDes"
            rows="5"
            value={formData.longDes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
