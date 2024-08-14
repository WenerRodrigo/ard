import { Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import NotFound from "../screens/not-found";
import PrivacyPolicy from "../screens/privacy-policy";
import Faq from "../screens/faq";
import About from "../screens/about";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
