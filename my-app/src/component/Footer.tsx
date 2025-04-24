import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/imports";
import { Pages } from "../constent/links";

const Footer = () => {
  return (
    <footer className="bg-primary/10 px-6 md:px-16 lg:px-24 xl:px-32 mt-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <NavLink to={Pages.HOME}>
            <img className="w-34 md:w-32" alt="logo" src={logo} />
          </NavLink>
          <p className="max-w-[410px] mt-6">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-3/8 space-y-5">
          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Quick Links
            </h2>
            <ul className="text-sm space-y-1">
              <li>
                <Link className="hover:underline transition" to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Offers &amp; Deals
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Need help?
            </h2>
            <ul className="text-sm space-y-1">
              <li>
                <Link className="hover:underline transition" to="#">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Return &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Track your Order
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Follow Us
            </h2>
            <ul className="text-sm space-y-1">
              <li>
                <Link className="hover:underline transition" to="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition" to="#">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base">
        Copyright 2025 © GreatStack.dev All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
