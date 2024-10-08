import bannerOne from "../assets/banner-main01.png";
import bannerTwo from "../assets/banner-main02.png";

const AboutHome = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start w-full mt-16 px-6 lg:px-20 mb-16">
      <div className="flex flex-col items-start w-full text-start mb-8 lg:mb-0 lg:w-1/2 lg:pr-10">
        <div className="border-t-4 border-blue-600 w-1/5 mb-6"></div>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Quem somos</h1>
        <p className="mb-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
          Nosso foco é a garantia estendida para motores e câmbios de veículos
          semi-novos. Oferecemos o produto Garantia Motor e Câmbio, que amplia o
          período de cobertura além da garantia original fornecida pelo
          revendedor. Com isso, você tem mais tranquilidade e proteção para o
          seu veículo, assegurando uma cobertura abrangente e confiável para
          eventuais necessidades que possam surgir.
        </p>
        <div className="flex justify-center mt-10">
          <a
           href="https://api.whatsapp.com/send?phone=+5516981115555" target="_blank" rel="noreferrer"
            className="px-10 py-2 bg-blue-500 text-white text-center rounded-sm hover:bg-blue-600 block w-full lg:w-auto"
          >
            Fale conosco
          </a>
        </div>
      </div>
      <div className="flex lg:flex-row items-center w-full lg:w-1/2 gap-4 lg:gap-6">
        <img
          className="w-44 h-auto lg:w-[265px]"
          src={bannerOne}
          alt="Banner Home"
        />
        <img
          className="w-44 h-auto lg:w-[262px]"
          src={bannerTwo}
          alt="Banner Home"
        />
      </div>
    </div>
  );
};

export default AboutHome;
