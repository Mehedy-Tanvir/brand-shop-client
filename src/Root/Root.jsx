import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  return (
    <div className={location.pathname == "/" ? "relative" : "block"}>
      <div
        className={location.pathname == "/" ? "absolute z-50 w-full" : "block"}
      >
        <Navbar></Navbar>
      </div>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
