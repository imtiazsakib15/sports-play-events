import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { googleLogin, signIn } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Log In Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Log In Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <h2 className="text-4xl text-center font-semibold my-10">Login!</h2>
      <form onSubmit={handleLogin} className="max-w-xl mx-auto px-8">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 bottom-3 cursor-pointer"
          >
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </span>
        </div>
        <Link className="text-blue-700 block underline mb-6 text-sm font-medium">
          Forget Password
        </Link>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full"
        >
          Login
        </button>
        <p className="text-center mt-3">
          New user?{" "}
          <Link to="/register" className="text-blue-700 font-medium underline">
            Register Here
          </Link>
        </p>
      </form>
      <div className="mx-auto w-max mt-10 mb-20">
        <button
          onClick={handleGoogleLogin}
          className="font-medium hover:bg-blue-700 hover:text-white rounded-lg border px-20 py-3 flex items-center gap-2"
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </>
  );
};

export default Login;
