import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-700 text-white">
      <div className="container mx-auto px-4 md:px-10 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl text-blue-200 font-semibold mb-4">
              Office Address
            </h4>
            <p>Address: 1234 Main Street</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-2 flex flex-col">
            <h4 className="text-xl text-blue-200 font-semibold mb-4">
              Useful Links
            </h4>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </div>
          <div>
            <h4 className="text-xl text-blue-200 font-semibold mb-6">
              Follow Us
            </h4>
            <div className="text-xl flex gap-5 justify-center md:justify-start">
              <Link>
                <BsFacebook />
              </Link>
              <Link>
                <BsInstagram />
              </Link>
              <Link>
                <BsYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-300 text-sm border-t pt-6 mt-14 text-center">
            Copyright &copy; 2023{" "}
            <Link to="/" className="underline font-medium">
              sportsPlay Events
            </Link>{" "}
            . All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
