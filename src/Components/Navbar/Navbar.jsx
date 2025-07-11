import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import defaultUserIcon from "../../assets/defaultUserIcon.png"

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          icon: "info",
          title: "Logged Out",
          text: "You have been successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // navlink style
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "hover:text-indigo-600 transition";

  return (
    <div className=" fixed bg- top-0 left-0 w-full bg-white z-50 border-b-1 border-b-blue-200">
      <nav className="navbar w-[90%] md:w-3/4 mx-auto rounded-md  py-3">
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
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-blog" className={linkClass}>
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-blogs" className={linkClass}>
                All Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/featured-blogs" className={linkClass}>
                Featured Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className={linkClass}>
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="hidden md:inline-block text-xl md:text-2xl font-bold ml-2 md:ml-4"
        >
          <span className="text-rose-400">Daily</span>
          <span className="text-violet-500">Drafts</span>
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600 space-x-1">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-blog" className={linkClass}>
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-blogs" className={linkClass}>
              All Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/featured-blogs" className={linkClass}>
              Featured Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className={linkClass}>
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2 md:space-x-3">
        {user ? (
          <>
            <div
              className={`avatar max-sm:hidden w-12`}
              title={user.displayName}
            >
              <div className="mask mask-squircle w-10">
                <img src={user?.photoURL || defaultUserIcon} />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="relative mr-5 inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-indigo-600 text-indigo-600 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-indigo-600 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                SignOut
              </span>
            </button>
          </>
        ) : (
          <div>
            <NavLink
              to="/login"
              className="relative mr-5 inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-indigo-600 text-indigo-600 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-indigo-600 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                Login
              </span>
            </NavLink>

            <NavLink
              to="/register"
              className="hidden md:inline-block relative px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-rose-500 text-rose-500 rounded-md overflow-hidden text-sm md:text-base"
            >
              <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-rose-500 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
              <span className="relative z-10 group-hover:text-white transition">
                Register
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
