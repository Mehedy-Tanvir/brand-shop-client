import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <div className={location.pathname == "/" ? "relative" : "block"}>
      <div
        className={location.pathname == "/" ? "absolute z-50 w-full" : "block"}
      >
        <Navbar toggleTheme={toggleTheme}></Navbar>
      </div>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
