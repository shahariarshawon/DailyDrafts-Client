import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import defaultUserIcon from "../../assets/defaultUserIcon.png";
import axios from "axios";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(
        "https://blog-server-khaki-eta.vercel.app/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success) {
          // clear auth state in frontend
        }
      });
    userLogout()
      .then(() => {
        Swal.fire({
          icon: "info",
          title: "Logged Out",
          text: "You have been successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/auth/login");
      })
      .catch((error) => {
      });
  };

  // navlink style
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "hover:text-indigo-600 transition";

  return (
    <div className=" fixed bg- top-0 left-0 w-full bg-gray-100 z-50 border-b-1 border-b-blue-300">
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

              {user ? (
                <>
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
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/all-blogs" className={linkClass}>
                      All Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" className={linkClass}>
                      FAQ
                    </NavLink>
                  </li>
                </>
              )}
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

            {user ? (
              <>
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
              </>
            ) : (
              <>
                {/* For not logged in users */}
                <li>
                  <NavLink to="/all-blogs" className={linkClass}>
                    All Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className={linkClass}>
                    FAQ
                  </NavLink>
                </li>
              </>
            )}
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
                to="/auth/login"
                className="relative mr-5 inline-block px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-indigo-600 text-indigo-600 rounded-md overflow-hidden text-sm md:text-base"
              >
                <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-indigo-600 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
                <span className="relative z-10 group-hover:text-white transition">
                  Login
                </span>
              </NavLink>

              <NavLink
                to="/auth/register"
                className="hidden md:inline-block relative px-4 md:px-5 py-1.5 md:py-2 font-medium group border-2 border-rose-500 text-rose-500 rounded-md overflow-hidden text-sm md:text-base"
              >
                <span className="absolute w-full h-0 transition-all duration-300 ease-in-out bg-rose-500 top-1/2 left-0 group-hover:h-full group-hover:top-0 z-0" />
                <span className="relative z-10 group-hover:text-white transition">
                  Register
                </span>
              </NavLink>
            </div>
          )}
          {/* theme toggler button */}
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the statee */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current text-[#4F39F6]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current text-[#4F39F6]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
