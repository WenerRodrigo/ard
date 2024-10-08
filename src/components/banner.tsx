import banner from "../assets/banner-home.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <img className="w-full h-[220px] sm:h-full sm:max-w-none" src={banner} alt="Banner Home" />
      </div>
      <div className="absolute left-2 sm:left-20 text-left px-6 sm:px-0">
        <p className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
          A Garantia que o
          <br />
          seu veículo precisa
        </p>
        <p className="text-gray-300 text-base sm:text-xl">
          Proteja o seu investimento com a gente, sua satisfação&nbsp;
          <br className="hidden sm:block" />
          é a nossa prioridade.
        </p>
      </div>
    </div>
  );
};

export default Banner;
