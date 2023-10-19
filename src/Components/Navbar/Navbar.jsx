import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  const links = (
    <>
      {user && (
        <li className="order-first md:ml-0 text-[#111] text-[18px]">
          <div className="flex flex-col items-start justify-center gap-2 lg:items-center lg:flex-row">
            <img
              className="h-[40px] w-[40px] object-cover object-center rounded-[50%] mr-2"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
              }
              alt=""
            />
            <p className="font-medium">{user?.displayName}</p>
          </div>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-yellow-600 font-semibold text-[18px] underline"
              : "text-[#111] font-semibold text-[18px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-yellow-600 font-semibold text-[18px] underline"
              : "text-[#111] font-semibold text-[18px]"
          }
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-yellow-600 font-semibold text-[18px] underline"
              : "text-[#111] font-semibold text-[18px]"
          }
          to="/cart"
        >
          <p className="flex items-center justify-center">
            My Cart <FaShoppingCart className="ml-2 text-2xl" />
          </p>
        </NavLink>
      </li>
      {user && (
        <li>
          <div
            onClick={handleLogout}
            className="text-[#111] text-[18px] items-center font-semibold gap-1 cursor-pointer"
          >
            Logout
          </div>
        </li>
      )}
      {!user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "lg:text-yellow-600 font-semibold text-[18px] underline"
                : "text-[#111] font-semibold text-[18px]"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 py-4 mx-auto">
      <div className="flex items-center justify-center">
        <img className="" src="/logo.svg" alt="logo" />
        <p className="text-4xl font-semibold">NEXUS</p>
      </div>
      <ul className="lg:flex hidden items-center uppercase justify-between gap-[60px]">
        {links}
      </ul>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-[36px] text-[#111]" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
