import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = ({ toggleTheme }) => {
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
      <li className="flex items-center justify-start">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={toggleTheme} />

          {/* sun icon */}
          <svg
            className="w-10 h-10 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="w-10 h-10 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
      {user && (
        <li className="md:ml-0 text-[var(--body_color)] text-[18px]">
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
              : "text-[var(--body_color)] font-semibold text-[18px]"
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
              : "text-[var(--body_color)] font-semibold text-[18px]"
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
              : "text-[var(--body_color)] font-semibold text-[18px]"
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
            className="text-[var(--body_color)] text-[18px] items-center font-semibold gap-1 cursor-pointer"
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
                : "text-[var(--body_color)] font-semibold text-[18px]"
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
          <AiOutlineMenu className="text-[36px] text-[var(--body_color)]" />
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
