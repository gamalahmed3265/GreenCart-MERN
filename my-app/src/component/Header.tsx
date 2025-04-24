import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cart, logo, profile_icon, search } from "../assets/imports";
import { Pages } from "../constent/links";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin } = useAppContext();
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    setUser(false);
    navigate(Pages.HOME);
  };
  return (
    <header className="px-6 md:px-16 lg:px-24 xl:px-32 py-4 sticky left-0 top-0 flex items-center justify-between p-4 bg-white shadow">
      <NavLink to={Pages.HOME}>
        <img src={logo} className="cursor-pointer w-34 md:w-38" alt="" />
      </NavLink>
      <nav className="hidden md:flex items-center gap-8">
        <button
          onClick={() => setOpen(false)}
          className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80"
        >
          Seller Dashboard
        </button>
        <NavLink to={Pages.HOME}>Home</NavLink>
        <NavLink to={Pages.PRODUCTS}>All Product</NavLink>
        <div
          className={
            searchToggle
              ? "flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden"
              : ""
          }
        >
          {searchToggle && (
            <input
              type="text"
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search products"
            />
          )}
          <button
            onClick={() => setSearchToggle(!searchToggle)}
            className="w-4 h-4"
          >
            <img src={search} alt="" className="w-4 h-4" />
          </button>
        </div>
        <NavLink
          to={Pages.CART}
          className="relative flex items-center cursor-pointer"
        >
          <img className="w-6 opacity-80" src={cart} alt="" />
          <span className="absolute -top-4 text-center -right-3 rounded-full text-xs hover:bg-primary-dull bg-primary h-4.5 w-4.5 text-white">
            0
          </span>
        </NavLink>
        {user ? (
          <div className="relative group cursor-pointer">
            <img src={profile_icon} className="w-10 h-10" alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 w-30 rounded-md text-sm z-40">
              <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">
                <Link to={Pages.ORDERS}>My Orders</Link>
              </li>
              <li
                onClick={() => {
                  logout();
                }}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => logout()}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </nav>
      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full gap-4 bg-white shadow-md py-4 flex-col items-start  px-5 text-sm md:hidden`}
      >
        <button
          onClick={() => setOpen(false)}
          className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80"
        >
          Seller Dashboard
        </button>
        <NavLink onClick={() => setOpen(false)} to={Pages.HOME}>
          Home
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to={Pages.PRODUCTS}>
          All Product
        </NavLink>
        {user && (
          <NavLink onClick={() => setOpen(false)} to={Pages.ORDERS}>
            My Orders
          </NavLink>
        )}
        <div
          className={
            searchToggle
              ? "flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden"
              : ""
          }
        >
          {searchToggle && (
            <input
              type="text"
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search products"
            />
          )}
          <button
            onClick={() => setSearchToggle(!searchToggle)}
            className="w-4 h-4"
          >
            <img src={search} alt="" className="w-4 h-4" />
          </button>
        </div>
        <NavLink
          to={Pages.CART}
          onClick={() => setOpen(false)}
          className="relative flex items-center cursor-pointer"
        >
          <img className="w-6 opacity-80" src={cart} alt="" />
          <span className="absolute -top-4 text-center -right-3 rounded-full text-xs hover:bg-primary-dull bg-primary h-4.5 w-4.5 text-white">
            0
          </span>
        </NavLink>
        {user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
