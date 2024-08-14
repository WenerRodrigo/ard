import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import ContentFooter from "./components/content-footer";
import SplashScreen from "./components/splash";
import CookieConsent from "./components/cookie-consent";
import whatsapp from "./assets/whatsapp.png";
import TopHeader from "./components/top-header";
import Banner from "./components/banner";
import Home from "./screens/home";
import MainContent from "./components/main-content";
import NotFound from "./screens/not-found";
import PrivacyPolicy from "./screens/privacy-policy";
import Header from "./components/header";
import Faq from "./screens/faq";
import About from "./screens/about";

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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopHeader />
                  <Header />
                  <Banner />
                  <Home />
                  <div className="fixed bottom-10 right-5 z-40 flex items-center space-x-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=+551699999999"
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
                  <MainContent />
                  <ContentFooter />
                  <Footer />
                  <CookieConsent />
                </>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
