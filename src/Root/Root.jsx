import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="h-screen bg-orange-50">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
