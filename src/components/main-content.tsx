import { SetStateAction, useEffect, useRef, useState } from "react";
// import bannerFundo from "../assets/banner-fundo.jpg";

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  const startCounting = (endValue: number, setValue: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): void; }) => {
    let start = 0;
    const duration = 2000; // duração total da contagem (em ms)
    const increment = endValue / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setValue(endValue);
      } else {
        setValue(Math.ceil(start));
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta após a primeira visualização
        }
      },
      { threshold: 0.1 } // O quanto do elemento precisa estar visível (0.1 = 10%)
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const [yearsInMarket, setYearsInMarket] = useState(0);
  const [carsWithWarranty, setCarsWithWarranty] = useState(0);
  const [protectedVehicles, setProtectedVehicles] = useState(0);

  useEffect(() => {
    if (isVisible) {
      startCounting(2, setYearsInMarket);
      startCounting(5478, setCarsWithWarranty);
      startCounting(5478, setProtectedVehicles);
    }
  }, [isVisible]);

  return (
    <div
      ref={contentRef}
      className="flex items-center justify-evenly w-full bg-blue-300 py-24 flex-wrap gap-5"
    >
      <div className="flex flex-col items-center bg-white lg:w-1/5 sm:w-full py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{yearsInMarket}</p>
        <p className="text-lg text-zinc-800">Anos no mercado</p>
      </div>

      <div className="flex flex-col items-center bg-white lg:w-1/5 sm:w-full py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{carsWithWarranty}</p>
        <p className="text-lg text-zinc-800">Carros com Garantia</p>
      </div>

      <div className="flex flex-col items-center bg-white lg:w-1/5 sm:w-full py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{protectedVehicles}</p>
        <p className="text-lg text-zinc-800">Veículos Protegidos</p>
      </div>
    </div>
  );
};

export default MainContent;
