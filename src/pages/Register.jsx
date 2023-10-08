import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleGoogleLogin, createUser } = useContext(AuthContext);

  //   Register With Email and Password
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Checking for Strong Password
    if (password.length < 6) {
      toast.error("Password should have at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one capital letter.");
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      toast.error("Password should have at least one special character.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered!");

        updateProfile(auth.currentUser, {
          displayName: name ? name : null,
          photoURL: imageUrl ? imageUrl : null,
        }).catch(() => {
          toast.error("An error occured!");
          return;
        });

        result.user.displayName = name ? name : null;
        result.user.photoURL = imageUrl ? imageUrl : null;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <h2 className="text-4xl text-center font-semibold my-10">Register now</h2>
      <form onSubmit={handleRegister} className="max-w-xl mx-auto px-8">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image-url"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your image url
          </label>
          <input
            type="text"
            id="image-url"
            name="imageUrl"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
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
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              name="toc"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I agree with the{" "}
            <Link className="text-blue-700 hover:underline">
              terms and conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full"
        >
          Register new account
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 font-medium underline">
            Login Here
          </Link>
        </p>
      </form>
      <div className="mx-auto w-max mt-10 mb-20">
        <button
          onClick={handleGoogleLogin}
          className="font-medium hover:bg-blue-700 hover:text-white rounded-lg border px-20 py-3 flex items-center gap-2"
        >
          <FcGoogle />
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default Register;
