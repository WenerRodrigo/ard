import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { GoArrowUp } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const ContentFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start justify-around w-full h-full bg-secondary text-zinc-800 py-16 px-5 flex-wrap text-left gap-4">
        <div className="flex flex-col items-start">
          <h2 className="h-12 text-lg font-semibold">Nossa Missão</h2>
          <p>
            Em um mercado altamente competitivo,
            <br />
            nossa missão é oferecer aos nossos
            <br />
            clientes uma garantia estendida para motor
            <br />
            e câmbio de veículos semi-novos,
            <br />
            assegurando serviços de excelência e
            <br />
            satisfação em cada etapa do processo.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="h-12 text-lg font-semibold">Institucional</h2>
          <a href="/faq" className="mb-1">
            FAQ
          </a>
          <a href="/privacy-policy" className="mb-1">
            Política de privacidade
          </a>
          <div className="flex flex-col items-start mt-2">
            <h2 className="h-12 text-lg font-semibold">Redes Sociais</h2>
            <div className="flex items-center gap-2">
              <a href="#">
                <img className="w-9" src={instagram} alt="Instagram" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="w-9" src={facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <h2 className="h-12 text-lg font-semibold">Atendimento</h2>
          <p>
            <a
              className="flex gap-2 mb-2"
              href="https://api.whatsapp.com/send?phone=+5516999999999"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={22} />
              (16) 99999-9999
            </a>
          </p>
          <p>
            <a
              className="flex gap-2"
              href="mailto: werowebsolutions@.com.br"
              rel="noopener noreferrer"
            >
              <TfiEmail size={22} />
              ardgarantiamotorecambio.com.br
            </a>
          </p>
        </div>

        <div className="flex flex-col items-start gap-1">
          <h2 className="h-12 text-lg font-semibold">ARD Motor e Câmbio</h2>
          <p>Garantia para motor e câmbio</p>
          <p className="text-sm text-white">
            Razão Social: Ard Garantia De Motor E Cambio Ltda
          </p>
          <p className="text-sm text-white">CNPJ: 56.283.588/0001-92</p>
          <p className="text-sm text-white">SAC: 16 99999 - 9999</p>
        </div>
      </div>
      <div className="flex items-center justify-center absolute w-full bottom-0 border-b">
        <button
          className="bg-slate-200 px-2 py-1 rounde rounded-t-xl text-sm flex items-center gap-1 text-gray-600"
          onClick={scrollToTop}
        >
          voltar ao topo <GoArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ContentFooter;
