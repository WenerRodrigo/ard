import { useState, useEffect, useRef } from "react";
import MenuMobile from "./menu-mobile";

const Header = () => {
  const [_isOpen, setIsOpen] = useState(false);
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

  const scrollToBeneficios = () => {
    const section = document.getElementById("beneficios");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center px-20 lg:py-2">
        <div className="hidden lg:flex flex-col items-start justify-start w-full">
          <a href="/" className="items-start justify-start w-full flex-col">
            <h2 className="text-4xl font-extrabold text-blue-600 tracking-wide uppercase">
              ARD
            </h2>
            <p className="text-lg font-semibold text-gray-900">
              Garantia para motor e câmbio
            </p>
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-around w-full">
          <a href="/" className="hover:text-gray-600 font-medium">
            Início
          </a>
          <a href="/about" className="hover:text-gray-600 font-medium">
            Sobre nós
          </a>
          <a
            href="/faq"
            className="hover:text-gray-600 font-medium"
            onClick={scrollToBeneficios}
          >
            Dúvidas frequentes
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5516981115555"
            target="_blank"
            className="font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-sm"
          >
            Fale conosco
          </a>
        </div>
      </div>
      <MenuMobile />
    </>
  );
};

export default Header;
