import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedMenu(null);
  };

  const toggleSubMenu = (menu: string) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
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
    <div className="flex items-center">
      <button
        onClick={toggleMenu}
        className="ml-auto block lg:hidden focus:outline-none"
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
        <div className="bg-white w-80 h-full p-4 rounded-r-xl">
          <div className="flex items-center border-b mb-4 py-2">
            <span>
              <img className="w-8" src={logo} alt="Logo" />
            </span>{" "}
            <span className="font-semibold">eroweb </span>
            <span className="text-blue-600 ml-1 font-semibold">Soluções</span>
          </div>
          <ul className="text-lg">
            <li className="my-2 py-1">
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
            <li className="my-2 py-1">
              <a
                href="/about"
                onClick={() => handleLinkClick("/about")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/about" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                A empresa
                <ChevronRight
                  className={`${activeLink === "/about" ? "text-blue-500" : "text-zinc-800"}`}
                />
              </a>
            </li>
            <li className="my-2 py-1">
              <div
                onClick={() => toggleSubMenu("services")}
                className={`cursor-pointer flex items-center justify-between text-xl ${
                  expandedMenu === "services"
                    ? "text-blue-500"
                    : "text-zinc-800"
                }`}
              >
                Soluções
                {expandedMenu === "services" ? (
                  <ChevronDown className="ml-2" />
                ) : (
                  <ChevronRight className="ml-2" />
                )}
              </div>
              {expandedMenu === "services" && (
                <ul className="pl-4 mt-3">
                  <li>
                    <a
                      href="/landing-page"
                      onClick={() => handleLinkClick("/landing-page")}
                      className={`flex items-center justify-between text-lg ${
                        activeLink === "/landing-page"
                          ? "text-blue-500"
                          : "text-zinc-800"
                      }`}
                    >
                      Landing Page
                      <ChevronRight
                        className={`${activeLink === "/landing-page" ? "text-blue-500" : "text-zinc-800"}`}
                      />
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="/custom-web"
                      onClick={() => handleLinkClick("/custom-web")}
                      className={`flex items-center justify-between text-lg ${
                        activeLink === "/custom-web"
                          ? "text-blue-500"
                          : "text-zinc-800"
                      }`}
                    >
                      Sites Personalizados
                      <ChevronRight
                        className={`${activeLink === "/custom-web" ? "text-blue-500" : "text-zinc-800"}`}
                      />
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="/apps"
                      onClick={() => handleLinkClick("/apps")}
                      className={`flex items-center justify-between text-lg ${
                        activeLink === "/apps"
                          ? "text-blue-500"
                          : "text-zinc-800"
                      }`}
                    >
                      App Mobile
                      <ChevronRight
                        className={`${activeLink === "/apps" ? "text-blue-500" : "text-zinc-800"}`}
                      />
                    </a>
                  </li>
                  {/* Adicione outros itens do submenu aqui conforme necessário */}
                </ul>
              )}
            </li>
            <li className="my-2 py-1">
              <a
                href="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`flex items-center justify-between text-xl ${
                  activeLink === "/contact" ? "text-blue-500" : "text-zinc-800"
                }`}
              >
                Solicitar orçamento
                <ChevronRight
                  className={`${activeLink === "/contact" ? "text-blue-500" : "text-zinc-800"}`}
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
