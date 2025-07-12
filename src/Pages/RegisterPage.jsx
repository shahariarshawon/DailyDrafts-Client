import { use, useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, CameraIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const RegisterPage = () => {
   const navigate = useNavigate();
  const { createUser,googleLogin,setUser,updateUser } = use(AuthContext);
  //password condition state
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [matchingPassword,setMatchingPassword]=useState("");
  const handleRegister = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photoURL = form.photoURL.value;
  const confirmPassword = form.confirmPassword.value;

  // Reset errors
  setPassError("");
  setMatchingPassword("");

  // Password Validation
  let error = "";
  if (password.length < 6) {
    error = "Password must be at least 6 characters.";
  } else if (!/[A-Z]/.test(password)) {
    error = "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    error = "Password must contain at least one lowercase letter.";
  } else if (!/[0-9]/.test(password)) {
    error = "Password must contain at least one numeric character.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    error = "Password must contain at least one special character.";
  }

  if (error) {
    setPassError(error);
    return;
  }

  // Password Match Check
  if (password !== confirmPassword) {
    setMatchingPassword("Passwords do not match.");
    return;
  }

  // Proceed with registration
  const userProfile = {
    name,
    email,
    password,
    photoURL,
  };

  createUser(email, password)
    .then((result) => {
      const user = result.user;

      updateUser({ displayName: name, photoURL: photoURL })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photoURL });

          // Save to DB
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userProfile),
          });

          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "Welcome to the platform",
            confirmButtonColor: "#6366f1",
          });

          navigate("/");
        })
        .catch((error) => {
          console.error("Profile update error:", error);
        });
    })
    .catch((error) => {
      console.error("Create user error:", error);
    });
};
//login with google
const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-violet-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <div
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              {passError && (
              <p className="text-sm text-red-500 mt-1">{passError}</p>
            )}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
              name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Re-enter password"
                className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <div
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              {matchingPassword && (
              <p className="text-sm text-red-500 mt-1">{matchingPassword}</p>
            )}
            </div>
          </div>

          {/* User Icon photoURL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              User Icon
            </label>
            <div className="relative">
              <CameraIcon
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                name="photoURL"
                type="url"
                required
                placeholder="User Icon's PhotoURL"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white bg-rose-500 hover:bg-rose-600 transition font-medium"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-violet-500 hover:underline">
            Login
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

export default RegisterPage;
