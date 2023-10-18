import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const location = useLocation();
  return (
    <div className={location.pathname == "/" ? "relative" : "block"}>
      <div
        className={location.pathname == "/" ? "absolute z-50 w-full" : "block"}
      >
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
