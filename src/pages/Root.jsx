import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

const Root = () => {
  AOS.init();
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
