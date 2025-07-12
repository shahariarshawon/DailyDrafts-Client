import React, { use, useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { userLogin, googleLogin } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        console.log(result)
        Swal.fire({
          icon: "success",
          title: "Sign in Successful!",
          text: "Welcome back to the platform",
          confirmButtonColor: "#6366f1",
        });
      })
      .catch((error) => {
        toast.error("Can't find this account!", {
                    position: "top-right",
                    autoClose:'500'
                  });
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => console.log(result))
      .catch((error) => {
         toast.error("Can't find this account!", {
                    position: "top-right",
                    autoClose:'500'
                  });
      });
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Sign In to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                name="email"
                type="email"
                required
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-purple-600 hover:underline font-medium">
            Register
          </Link>
        </div>

        <div className="my-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <hr className="w-1/4 border-gray-300" />
          OR
          <hr className="w-1/4 border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleLoginWithGoogle}
          className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
