import Lottie from "lottie-react";
import notFound from "../lottie/notFound.json";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Desculpe, Página Não Encontrada :(</h1>
        <p className="text-gray-600 text-center">
          Desculpe, não conseguimos encontrar a página que você está procurando. Talvez você tenha digitado o URL errado? Verifique se há erros de digitação.
        </p>
      </div>
      
      <div className="w-64 h-64 mb-8">
        <Lottie animationData={notFound} loop={true} />
      </div>
      
      <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Voltar para a Tela Inicial
      </a>
    </div>
  );
};

export default NotFound;
