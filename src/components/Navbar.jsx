import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerIcon from "../assets/hamburger.svg"; // Update the path as needed

function CustomNavbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-gray-800">
              Unroll-Loop
            </span>
          </div>
          <div className="md:hidden">
            {/* Hamburger icon and mobile menu */}
            <button
              onClick={toggleMobileMenu}
              className="text-black-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <img
                src={HamburgerIcon}
                alt="Hamburger Icon"
                className="h-6 w-6 fill-current"
              />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.to}
                to={navLink.to}
                label={navLink.label}
                isSelected={location.pathname === navLink.to}
              />
            ))}
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.to}
                  to={navLink.to}
                  label={navLink.label}
                  isSelected={location.pathname === navLink.to}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, label, isSelected }) {
  const baseClasses = "text-black transition duration-300";
  const selectedClasses = "border-b-2 border-red-500";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isSelected ? selectedClasses : ""}`}
    >
      {label}
    </Link>
  );
}

export default CustomNavbar;
