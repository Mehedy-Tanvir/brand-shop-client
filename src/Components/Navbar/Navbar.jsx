import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-yellow-600 font-semibold text-[18px] underline"
              : "lg:text-[#111] font-semibold text-[18px]"
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
              : "lg:text-[#111] font-semibold text-[18px]"
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
              : "lg:text-[#111] font-semibold text-[18px]"
          }
          to="/cart"
        >
          <p className="flex items-center justify-center">
            My Cart <FaShoppingCart className="ml-2 text-2xl" />
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-yellow-600 font-semibold text-[18px] underline"
              : "lg:text-[#111] font-semibold text-[18px]"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
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
