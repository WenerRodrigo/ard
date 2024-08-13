import { FaClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="w-full py-2  hidden sm:flex justify-between items-center px-20 bg-blue-600">
      <div className="text-white">
        <p className="text-sm">Bem vindo a ARD</p>
      </div>
      <div className="flex items-center gap-6 text-white px-6">
        <p className="flex items-center gap-2 text-sm">
          <FaClock /> SEG - SEX 8h às 18h - SAB 8h às 12h
        </p>
        <p className="flex items-center gap-2 text-sm">
          <BsFillTelephoneFill />
          (99) 99999 - 9999
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
