import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import MenuMobile from "./menu-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex justify-around">
      <div className="flex items-center w-full py-5 px-9">
        <a href="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="w-8" />

          <h1 className="font-semibold">
            eroweb <span className="text-blue-600">Soluções</span>
          </h1>
        </a>
      </div>
      <div className="hidden lg:flex items-center justify-around w-full">
        <a href="/">Início</a>
        <a href="/about">A Empresa</a>
        <div className="relative z-30" ref={menuRef}>
          <button
            className="focus:outline-none flex items-center gap-1"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
          >
            Soluçoes
            <IoIosArrowDown />
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-1 bg-white w-56 rounded-lg shadow-lg">
              <div className="py-1">
                <a
                  href="/custom-web"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sites Personalizados
                </a>
                <a
                  href="/landing-page"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Landing Pages
                </a>
                <a
                  href="/apps"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  App Mobile
                </a>
              </div>
            </div>
          )}
        </div>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Contato
        </a>
      </div>
      <div className="p-5">
        <MenuMobile />
      </div>
    </div>
  );
};

export default Header;
