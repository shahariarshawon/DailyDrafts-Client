import { Menu, User } from "lucide-react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="navbar bg-white px-4 py-2 ">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-6 w-6 text-indigo-600" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-blog">Add Blog</Link>
            </li>
            <li>
              <Link to="/all-blogs">All Blogs</Link>
            </li>
            <li>
              <Link to="/featured">Featured Blogs</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>

        {/* Logo (Always visible, better spacing) */}
        <Link
          to="/"
          className=" hidden md:inline-block text-xl md:text-2xl font-bold ml-2 md:ml-4"
        >
          <span className="text-rose-400">Daily</span>
          <span className="text-violet-500">Drafts</span>
        </Link>
      </div>

      {/* Navbar Center (Only on larger screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600 space-x-1">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-blog" className="hover:text-indigo-600 transition">
              Add Blog
            </Link>
          </li>
          <li>
            <Link to="/all-blogs" className="hover:text-indigo-600 transition">
              All Blogs
            </Link>
          </li>
          <li>
            <Link to="/featured" className="hover:text-indigo-600 transition">
              Featured Blogs
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-indigo-600 transition">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2 md:space-x-3">
        {user ? (
          <div className="w-9 md:w-10 rounded-full ring ring-indigo-400 ring-offset-base-100 ring-offset-2">
            <img
              className="rounded-full"
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
            <button
              className="relative mr-5 inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-indigo-600 text-indigo-600 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-indigo-600 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                SignOut
              </span>
            </button>
          </div>
        ) : (
          <div>
            {/* Login Button */}
            <Link
              to="/login"
              className="relative mr-5 inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-indigo-600 text-indigo-600 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-indigo-600 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                Login
              </span>
            </Link>

            {/* Register Button */}
            <Link
              to="/register"
              className="hidden md:inline-block relative  px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-rose-500 text-rose-500 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-rose-500 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                Register
              </span>
            </Link>
          </div>
        )}
        {/* User Icon */}
      </div>
    </div>
  );
};

export default Navbar;
