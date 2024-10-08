import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // v2 icons
import { Link } from 'react-router-dom'; // Use Link to enable routing

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-poppy text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <h1 className="font-bold font-sansCondensed text-3xl underline">Pristup odbijen</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden lg:flex lg:items-center space-x-6 py-4">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <Link to="/" className="hover:underline font-taviraj text-lg">
                Početna
              </Link>
            </li>
            <li>
              <Link to="/o-nama" className="hover:underline font-taviraj text-lg">
                O nama
              </Link>
            </li>
            <li>
              <Link to="/izlozba" className="hover:underline font-taviraj text-lg">
                Izložba
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:underline font-taviraj text-lg">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Full-screen navigation for smaller screens */}
      <div
        className={`fixed inset-0 bg-poppy text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close Icon */}
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="flex flex-row">
              <p className="p-2 text-sm font-taviraj">Zatvori</p>
              <XMarkIcon className="h-8 w-8 text-white" />
            </div>
          </button>
        </div>

        {/* Logo and Navigation Links */}
        <div className="flex flex-col justify-start items-start h-full p-8 space-y-6">
          <div className="text-3xl font-bold font-sansCondensed underline">
            Pristup odbijen
          </div>

          <nav>
            <ul className="flex flex-col items-start space-y-6">
              <li>
                <Link to="/" className="hover:underline font-taviraj text-2xl font-medium" onClick={toggleMenu}>
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="hover:underline font-taviraj text-2xl font-medium" onClick={toggleMenu}>
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/izlozba" className="hover:underline font-taviraj text-2xl font-medium" onClick={toggleMenu}>
                  Izložba
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:underline font-taviraj text-2xl font-medium" onClick={toggleMenu}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
