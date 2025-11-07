import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/Cofee-Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const Nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Menu", link: "/menu" },
    { id: 4, name: "Guide", link: "/guide" },
    { id: 5, name: "Landing", link: "/landing" },
    { id: 6, name: "Blog", link: "/blog" },
    { id: 7, name: "Shop", link: "/shop" },
    { id: 8, name: "Contact", link: "/contact" },
    { id: 9, name: <AiOutlineShoppingCart />, link: "/view-cart" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="flex items-center justify-between px-8 md:px-10 py-4 shadow-md bg-white">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="UnitScreen Logo" className="w-16 h-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-3xl text-blue-400 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`text-sm open-sans-normal transition-colors duration-200 ${
                currentPath === item.link
                  ? "text-[#0b69d4] font-semibold"
                  : "text-gray-800 hover:text-[#2ea3f2]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <FiSearch className="text-xl text-gray-600 hover:text-[#2ea3f2] cursor-pointer" />
        </nav>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`block px-5 py-3 border-b transition-colors duration-200 ${
                currentPath === item.link
                  ? "text-[#0b69d4] font-semibold"
                  : "text-gray-800 hover:text-[#2ea3f2]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;
