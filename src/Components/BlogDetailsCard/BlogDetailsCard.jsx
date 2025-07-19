import React, { use, useEffect, useState } from "react";
import { Pencil, MessageCircle } from "lucide-react";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const BlogDetailsCard = ({ blog }) => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const {
    title,
    _id,
    photoURL,
    category,
    shortDes,
    userName,
    createdAt,
    userPhoto,
    longDes,
    email,
  } = blog;

  //sending comments to the database
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;

    const commentData = {
      blogId: _id, // Add blog ID to identify where the comment belongs
      commenterName: user.displayName,
      commenterEmail: user.email,
      commenterPhoto: user.photoURL,
      comment: commentText,
      createdAt: new Date().toISOString(),
    };
    //sending comment to the database
    fetch("https://blog-server-khaki-eta.vercel.app/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Comment posted successfully!");
        e.target.reset();
        // Re-fetch comments
        fetch(`https://blog-server-khaki-eta.vercel.app/comments?blogId=${_id}`)
          .then((res) => res.json())
          .then((data) => setComments(data));
      })
      .catch((error) => {
          console.error("Comment post failed:", error);
        toast.error("Failed to post comment.");
      });
  };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://blog-server-khaki-eta.vercel.app/comments?blogId=${_id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Failed to fetch comments", err));
  }, [_id]);
  //deleting blog

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://blog-server-khaki-eta.vercel.app/blogs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              navigate("/all-blogs");
            } else {
              Swal.fire("Error!", "Failed to delete the post.", "error");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  //getting the comment by blogId

  const isOwner = user && user.email === email;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
      {/* Blog Header */}
      <div className="mb-10">
        <img
          src={photoURL}
          alt={title}
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md"
        />
        <div className="mt-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-5 mt-5 text-slate-600">
            <img
              src={userPhoto}
              alt={userName}
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">{userName}</p>
              <p className="text-sm text-slate-400">
                {new Date(createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <span className="ml-auto bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full font-semibold text-sm">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="prose prose-slate max-w-none text-slate-800 mb-14">
        <p className="font-semibold text-xl">{shortDes}</p>
        <br />
        <p>{longDes}</p>
      </article>

      {/* Update Button: Only blog owner can see */}
      {isOwner && (
        <div className="mb-12 flex justify-end gap-4">
          <button className="flex items-center gap-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-md transition">
            <Pencil size={20} />
            <Link to={`/update-post/${_id}`}>Update Blog</Link>
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            🗑️ Delete Blog
          </button>
        </div>
      )}

      {/* Comment Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <MessageCircle size={28} className="text-cyan-600" />
          Comments
        </h2>

        {/* Comment Box or Restriction Message */}
        <div>
          {user ? (
            isOwner ? (
              <p className="text-red-600 font-semibold italic">
                You cannot comment on your own blog post.
              </p>
            ) : (
              <form onSubmit={handleSubmitComment}>
                <textarea
                  rows="4"
                  name="comment"
                  className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-4 focus:ring-cyan-300 resize-none placeholder:text-slate-400"
                  placeholder="Write your comment here..."
                />
                <button
                  type="submit"
                  className="mt-3 px-6 py-3 rounded-md font-semibold text-white bg-cyan-600 hover:bg-cyan-700 transition"
                >
                  Submit Comment
                </button>
              </form>
            )
          ) : (
            <p className="text-orange-600 font-semibold italic">
              Please log in to comment.
            </p>
          )}
        </div>

        {/* Comments List */}
        <div className="space-y-6 mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-slate-50 p-5 rounded-lg shadow-sm"
              >
                <img
                  src={
                    comment.commenterPhoto || "https://via.placeholder.com/40"
                  }
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {comment.commenterName || "Anonymous"}
                  </p>
                  <p className="text-slate-600 mt-1 text-sm">
                    {comment.comment}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm italic text-slate-500">No comments yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsCard;
