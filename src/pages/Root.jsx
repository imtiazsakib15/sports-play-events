import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  AOS.init();
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Root;
