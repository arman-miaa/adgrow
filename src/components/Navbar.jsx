import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar mx-auto max-w-screen-lg p-2 rounded-full border-2 border-base-200 bg-base-100 shadow">
        <div className=" px-4 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-8 h-8 object-cover " src={logo} alt="" />
            <Link className=" text-xl font-bold md:text-2xl " to="/">
              Adgrow
            </Link>
          </div>

          <div className="flex">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1 items-center">
              {/* Dropdown 1 */}
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-sm text-base font-normal">
                  Product <ChevronDown className="w-4 h-4 ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                  <li>
                    <a href="#">Optimization</a>
                  </li>
                  <li>
                    <a href="#">Automation</a>
                  </li>
                </ul>
              </div>

              {/* Dropdown 2 */}
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-sm text-base font-normal">
                  Resources <ChevronDown className="w-4 h-4 ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-6">
                <NavLink to="/" className="  text-base">
                  Pricing
                </NavLink>
                <NavLink to="/" className="  text-base">
                  Talk to Sales
                </NavLink>
                <NavLink to="/" className="  text-base">
                  Login
                </NavLink>
                <button className="btn bg-blue-500 text-white rounded-full ">Try for Free</button>
              </div>
            </div>

            {/* Desktop Auth
            <div className="hidden md:flex gap-2">
              <button className="btn btn-ghost btn-sm">Login</button>
              <button className="btn btn-primary btn-sm">Try for Free</button>
            </div> */}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="btn btn-ghost btn-square"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow w-full">
          <ul className="menu space-y-3">
            <li>
              <details open>
                <summary className="font-medium">Product</summary>
                <ul>
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                  <li>
                    <a href="#">Optimization</a>
                  </li>
                  <li>
                    <a href="#">Automation</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-medium">Resources</summary>
                <ul>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Talk to Sales</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <button className="btn btn-primary w-full mt-2">
                Try for Free
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
