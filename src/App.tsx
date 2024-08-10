import { useState } from "react";
import Footer from "./components/footer";
import ContentFooter from "./components/content-footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/splash";
import CookieConsent from "./components/cookie-consent";
import whatsapp from "./assets/whatsapp.png";
import TopHeader from "./components/top-header";
import Banner from "./components/banner";
import Home from "./screens/home";




function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  return (
    <div>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <BrowserRouter>
        <TopHeader />
        <Banner />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          </Routes>
          <div className="fixed bottom-10 right-5 z-40 flex items-center space-x-2">
            <a
              href="https://api.whatsapp.com/send?phone=+5516988213188"
              target="_blank"
              rel="noreferrer"
              className="items-center"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-12 text-center object-cover"
                title="WhatsApp"
              />
            </a>
          </div>
          <ContentFooter />
          <Footer />
          <CookieConsent />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
