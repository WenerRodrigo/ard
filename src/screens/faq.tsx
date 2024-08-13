import { useState } from "react";
import Header from "../components/header";
import banner from "../assets/banner-home.png";
import ContentFooter from "../components/content-footer";
import Footer from "../components/footer";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Por que contratar o Garantia Mecânica?",
      answer:
        "A Garantia Mecânica oferece cobertura adicional que protege o seu veículo contra defeitos mecânicos, garantindo tranquilidade e segurança para você.",
    },
    {
      question: "Seguro e Garantia Mecânica é a mesma coisa?",
      answer:
        "NÃO. O seguro do carro te dá cobertura contra roubo, danos pessoais ou a terceiros, por exemplo. A Garantia Mecânica oferece um seguro de 1 ano após a aquisição do seu carro na revendedora, com cobertura de itens mecânicos e mão de obra inerente à aplicação dos componentes, conforme o plano contratado.",
    },
    {
      question: "Como contratar o Garantia Mecânica?",
      answer:
        "Você pode contratar o Garantia Mecânica entrando em contato conosco através do nosso site ou por telefone. Nossos consultores estão prontos para ajudar.",
    },
    {
      question: "Minha Garantia cobre 100% meu carro?",
      answer:
        "NÃO. A garantia cobre apenas os itens mecânicos, como motor e câmbio do veículo. Itens de desgaste natural, como pastilhas de freio, pneus e bateria, não estão cobertos entre outros.",
    },
    {
      question: "Posso transferir minha Garantia Mecânica?",
      answer:
        "Não. O serviço da ARD é pessoal e intransferível do comprador do veículo,perdendo sua validade em caso de transferência de propriedade.",
    },
    {
      question:
        "Como proceder se meu veículo apresentar um defeito mecânico aos finais de semana?",
      answer:
        "É de sua responsabilidade o transporte do veículo até a oficina ou um local seguro para que no próximo dia útil você possa abrir um chamado em horário comercial e verificar uma oficina indicada pelos técnicos.",
    },
    {
      question: "Onde devo fazer a manutenção preventiva?",
      answer:
        "Em oficinas mecânicas, concessionárias ou centros automotivos que possam fornecer NOTA FISCAL ou CUPOM FISCAL, do serviço para comprovação da manutenção.",
    },
    {
      question: "A Garantia Mecânica pode ser renovada após o término da vigência original?",
      answer:
        "NÃO. A vigência original do termo é de 12 meses, se encerrando a responsabilidade da ARD sob as condições previstas no Termo de Garantia.",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-full sm:max-w-none"
            src={banner}
            alt="Banner Home"
          />
        </div>
        <div className="absolute left-2 sm:left-20 text-left px-6 sm:px-0">
          <p className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
            Dúvidas frequentes
          </p>
          <p className="text-white text-lg sm:text-2xl md:text-xl">
            Encontre respostas para as perguntas mais comuns
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h1 className="flex items-center text-4xl font-bold">
          Dúvidas frequentes
        </h1>
      </div>
      <div className="flex items-center justify-center w-full py-10">
        <div className="w-full max-w-3xl px-5 py-4 bg-white border border-gray-200 rounded-md shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <div
                className={`cursor-pointer flex items-center justify-between px-4 py-3 text-gray-700 ${
                  openIndex === index ? "bg-gray-100" : ""
                } transition-colors duration-300 ease-in-out`}
                onClick={() => toggleOpen(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`px-4 py-1 text-gray-600 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mb-5 mt-8">
        <span className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-600">
          Tem alguma dúvida?
        </span>
        <a
          href="https://api.whatsapp.com/send?phone=+5516999999999"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Fale conosco
        </a>
      </div>
      <ContentFooter />
      <Footer />
    </>
  );
};

export default Faq;
