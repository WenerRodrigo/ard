import { useState, useEffect, useRef } from "react";
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

  // Função para rolar suavemente para a seção de benefícios
  const scrollToBeneficios = () => {
    const section = document.getElementById("beneficios");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center px-14">
        <div className="hidden lg:flex items-center w-full">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-20" />
            <h1 className="font-bold">
              Garantia para
              <br /> <span className="text-blue-600">motor e câmbio</span>
            </h1>
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-around w-full">
          <a href="/" className="hover:text-gray-600 font-medium">
            Início
          </a>
          <a href="/about" className="hover:text-gray-600 font-medium">
            A empresa
          </a>
          <a
            href="#beneficios"
            className="hover:text-gray-600 font-medium"
            onClick={scrollToBeneficios}
          >
            Produtos
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+551699999999"
            target="_blank"
            className="font-medium bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Contato
          </a>
        </div>
      </div>
      <MenuMobile />
    </>
  );
};

export default Header;
