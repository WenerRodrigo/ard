import { Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import NotFound from "../screens/not-found";
import PrivacyPolicy from "../screens/privacy-policy";
import Faq from "../screens/faq";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
