import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  AOS.init();
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
