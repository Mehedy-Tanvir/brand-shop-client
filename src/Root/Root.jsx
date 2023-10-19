import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import auth from "../firebase/firebaseConfig";

const Root = () => {
  const location = useLocation();
  console.log(auth.currentUser);
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
