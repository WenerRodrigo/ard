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
    <div className="bg-white flex justify-between items-center">
      <div className="flex items-center w-full">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-24" />
          <h1 className="font-semibold">
            Garantia <span className="text-blue-600">para motor e câmbio</span>
          </h1>
        </a>
      </div>
      <div className="hidden lg:flex items-center justify-around w-full">
        <a href="/">Início</a>
        <a href="/about">A Empresa</a>
        <a href="#beneficios" onClick={scrollToBeneficios}>Produtos</a>
        <a href="#">Contato</a>
      </div>
      <div className="p-5">
        <MenuMobile />
      </div>
    </div>
  );
};

export default Header;
