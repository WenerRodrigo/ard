import { SetStateAction, useEffect, useRef, useState } from "react";
import bannerFundo from "../assets/banner-fundo.jpg";

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  const startCounting = (
    endValue: number,
    setValue: {
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (arg0: number): void;
    }
  ) => {
    let start = 0;
    const duration = 2000; 
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
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
      className="relative w-full py-24 px-5 sm:px-0 flex flex-col sm:flex-row items-center justify-evenly gap-5"
      style={{
        backgroundImage: `url(${bannerFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-70 z-10"></div>
      <div className="relative z-20 flex flex-col items-center bg-white w-full sm:w-1/3 lg:w-3/12 py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{yearsInMarket}</p>
        <p className="text-lg text-zinc-800">Anos no mercado</p>
      </div>

      <div className="relative z-20 flex flex-col items-center bg-white w-full sm:w-1/3 lg:w-3/12 py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{carsWithWarranty}</p>
        <p className="text-lg text-zinc-800">Carros com Garantia</p>
      </div>

      <div className="relative z-20 flex flex-col items-center bg-white w-full sm:w-1/3 lg:w-3/12 py-6 rounded-md">
        <p className="text-4xl font-medium text-zinc-800">+{protectedVehicles}</p>
        <p className="text-lg text-zinc-800">Veículos Protegidos</p>
      </div>
    </div>
  );
};

export default MainContent;
