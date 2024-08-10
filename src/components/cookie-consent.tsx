import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!cookies.userConsent) {
      setShowConsent(true);
    }
  }, [cookies]);

  const handleAccept = () => {
    setCookie("userConsent", true, { path: "/", maxAge: 31536000 });
    setShowConsent(false);
  };

  const handleDecline = () => {
    setCookie("userConsent", false, { path: "/", maxAge: 31536000 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 p-4 bg-white border border-gray-300 shadow-lg z-50 rounded-md">
      <p className="mb-3 text-gray-700">
        Este site utiliza cookies para garantir que você tenha a melhor
        experiência. Ao continuar a navegar, você aceita nossos{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Termos de Privacidade
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="mr-3 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Aceitar
      </button>
      <button
        onClick={handleDecline}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Recusar
      </button>
    </div>
  );
};

export default CookieConsent;
