import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
// import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Beneficios() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <div ref={ref} className="flex items-center justify-center w-full bg-gray-100 flex-col pb-10">
      <div className="text-center py-20 px-6">
        <h2 className="text-5xl font-medium mb-4 text-zinc-800">Benefícios</h2>
        <p className="text-gray-600">
          Confira as melhores vantagens de contar com a nossa garantia Motor e
          Câmbio
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-between w-full sm:gap-10 px-4 gap-5 sm:px-20">
        {[
          {
            title: "Cobertura",
            subtitle: "Abrangente",
            text: "A nossa garantia cobre problemas associados ao motor e ao câmbio do veículo, fornecendo proteção extra contra falhas e defeitos nesses componentes fundamentais.",
          },
          {
            title: "Resolução Ágil de",
            subtitle: "Ocorrências",
            text: "Temos uma rede de profissionais altamente qualificados para realizar reparos de maneira rápida e eficiente, garantindo uma experiência tranquila e reduzindo os transtornos para o cliente.",
          },
          {
            title: "Rede de Mecânicas",
            subtitle: "Especializadas",
            text: "Oficinas especializadas em todo o Brasil proporcionam serviços de qualidade, realizados por profissionais capacitados e experientes, garantindo diagnósticos e reparos precisos para o seu veículo.",
          },
          {
            title: "Garantia Limite de",
            subtitle: "100.000 km",
            text: "A nossa garantia proporciona uma cobertura ampliada por um período extra de quilometragem, oferecendo maior segurança e tranquilidade ao proprietário do veículo em questão.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-start lg:w-1/5 w-full bg-white p-4"
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <p className="text-blue-500 text-4xl mb-2">
              <FaRegCheckCircle />
            </p>
            <p className="text-xl sm:text-xl font-medium text-zinc-800 mb-1">{item.title}</p>
            <p className="text-xl sm:text-xl font-medium text-zinc-800 mb-4">{item.subtitle}</p>
            <p className="text-md sm:text-md text-gray-600 flex-grow">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Beneficios;
