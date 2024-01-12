import * as React from "react";
import { Link, useLocation } from "react-router-dom";

function CustomNavbar() {
    const location = useLocation();

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

                        {/*
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="h-8 w-8 object-contain"
                            alt="Logo"
                        /> */}
                        <span className="ml-2 text-xl font-bold text-gray-800">MyBrand</span>
                    </div>
                    <div className="md:hidden">
                        {/* Add responsive menu icon here */}
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
