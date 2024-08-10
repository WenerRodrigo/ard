import { FaRegCheckCircle } from "react-icons/fa";

const Beneficios = () => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100 flex-col pb-10">
      <div className="text-center py-20 px-10">
        <h2 className="text-5xl font-medium mb-4 text-zinc-800">Benefícios</h2>
        <p className="text-gray-600">
          Confira as melhores vantagens de contar com a nossa garantia Motor e
          Câmbio
        </p>
      </div>

      {/* Bloco de Benefícios */}
      <div className="flex flex-col sm:flex-row items-start justify-between w-full sm:gap-10 px-4 gap-5 sm:px-20">
      <div className="flex flex-col items-start text-start lg:w-1/5 w-full bg-white p-4">
          <p className="text-blue-500 text-3xl mb-2">
            <FaRegCheckCircle />
          </p>
          <p className="text-xl sm:text-xl font-medium text-zinc-800 mb-1">Cobertura</p>
          <p className="text-xl sm:text-xl font-medium text-zinc-800 mb-4">Abrangente</p>
          <p className="text-md sm:text-md text-gray-600">
            A nossa garantia cobre problemas associados ao motor e ao câmbio do
            veículo, fornecendo proteção extra contra falhas e defeitos nesses
            componentes fundamentais.
          </p>
        </div>

        <div className="flex flex-col items-start text-start lg:w-1/5 w-full bg-white p-4">
          <p className="text-blue-500 text-4xl mb-2">
            <FaRegCheckCircle />
          </p>
          <p className="text-xl font-medium text-zinc-800 mb-1">Resolução Ágil de</p>
          <p className="text-xl font-medium text-zinc-800 mb-4">Ocorrências</p>
          <p className="text-md text-gray-600">
            Temos uma rede de profissionais altamente qualificados para realizar
            reparos de maneira rápida e eficiente, garantindo uma experiência
            tranquila e reduzindo os transtornos para o cliente.
          </p>
        </div>

        <div className="flex flex-col items-start text-start lg:w-1/5 w-full bg-white p-4">
          <p className="text-blue-500 text-4xl mb-2">
            <FaRegCheckCircle />
          </p>
          <p className="text-xl font-medium text-zinc-800 mb-1">Rede de Mecânicas</p>
          <p className="text-xl font-medium text-zinc-800 mb-4">Especializadas</p>
          <p className="text-md text-gray-600">
            Oficinas especializadas em todo o Brasil proporcionam serviços de
            qualidade, realizados por profissionais capacitados e experientes,
            garantindo diagnósticos e reparos precisos para o seu veículo.
          </p>
        </div>

        <div className="flex flex-col items-start text-start lg:w-1/5 w-full bg-white p-4">
          <p className="text-blue-500 text-4xl mb-2">
            <FaRegCheckCircle />
          </p>
          <p className="text-xl font-medium text-zinc-800 mb-1">Garantia Limite de</p>
          <p className="text-xl font-medium text-zinc-800 mb-4">100.000 km</p>
          <p className="text-md text-gray-600">
            A nossa garantia proporciona uma cobertura ampliada por um período
            extra de quilometragem, oferecendo maior segurança e tranquilidade
            ao proprietário do veículo em questão.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
