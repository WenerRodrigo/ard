import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como faço para contratar um site?",
      answer:
        "Para contratar um site, basta preencher nosso formulário de contato. Um de nossos especialistas entrará em contato para discutir seu projeto e fornecer um orçamento personalizado.",
    },
    {
      question: "Qual é o prazo de entrega de um site?",
      answer:
        "O prazo de entrega pode variar conforme a complexidade do projeto, mas geralmente entregamos sites prontos em até 30 dias úteis. Manteremos você informado ao longo do processo.",
    },
    {
      question: "Posso alterar o site depois de pronto?",
      answer:
        "Sim, você pode alterar o conteúdo do site sempre que necessário. Oferecemos suporte contínuo para atualizações e ajustes pós-lançamento.",
    },
    {
      question: "O site é responsivo?",
      answer:
        "Sim, todos os sites que desenvolvemos são projetados para serem totalmente responsivos, garantindo uma experiência de usuário consistente em qualquer dispositivo.",
    },
    {
      question: "Qual é a forma de pagamento?",
      answer:
        "Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, Pix e transferências bancárias. Escolha a forma que melhor se adapta às suas necessidades.",
    },
  ];

  return (
    <>
      <div className="bg-blue-300 text-center py-20 px-5">
        <h2 className="text-3xl text-white font-bold">Perguntas Frequentes</h2>
        <p className="text-white mt-4 text-lg">
          Esclareça suas dúvidas sobre nossos serviços.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h1 className="flex items-center text-5xl font-bold">
          FAQ <FaQuestion size={40} />
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
          href="https://api.whatsapp.com/send?phone=+5516988213188"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Fale conosco
        </a>
      </div>
    </>
  );
};

export default Faq;
