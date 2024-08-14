import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [_expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedMenu(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOutsideClick = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setExpandedMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
    setExpandedMenu(null);
  };

  return (
    <div className="flex items-center py-3 px-7 bg-primary lg:hidden">
      <button
        onClick={toggleMenu}
        className="mr-auto block lg:hidden focus:outline-none text-white"
        aria-label="Menu"
      >
        {isOpen ? <X size="24" /> : <Menu size="24" />}
      </button>

      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 z-50 bg-opacity-50 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-80 h-full p-4 rounded-r-xl relative">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Fechar Menu"
          >
            <X size="24" />
          </button>
          <div className="flex items-center border-b mb-4 py-2">
            <span className="font-semibold">Olá, bem vindo</span>
          </div>
          <ul className="text-lg">
            <li className="my-2">
              <a
                href="/"
                onClick={() => handleLinkClick("/")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                Início
                <ChevronRight
                  className={`${activeLink === "/" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
            <li className="my-2">
              <a
                href="/about"
                onClick={() => handleLinkClick("/about")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/about" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                Sobre nós
                <ChevronRight
                  className={`${activeLink === "/about" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
            <li className="my-2">
              <a
                href="/faq"
                onClick={() => handleLinkClick("/faq")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/faq" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                FAQ
                <ChevronRight
                  className={`${activeLink === "/faq" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://api.whatsapp.com/send?phone=+551699999999" target="_blank" rel="noreferrer"
                onClick={() => handleLinkClick("https://api.whatsapp.com/send?phone=+551699999999")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "https://api.whatsapp.com/send?phone=+551699999999" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                Fale conosco
                <ChevronRight
                  className={`${activeLink === "https://api.whatsapp.com/send?phone=+551699999999" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
            <li className="my-2">
              <a
                href="/privacy-policy"
                onClick={() => handleLinkClick("/privacy-policy")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/privacy-policy"
                    ? "text-blue-500"
                    : "text-zinc-800"
                }`}
              >
                Política de privacidade
                <ChevronRight
                  className={`${activeLink === "/privacy-policy" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
