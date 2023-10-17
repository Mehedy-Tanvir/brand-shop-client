import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="relative">
      <div className="absolute z-50 w-full">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
