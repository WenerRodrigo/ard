import { Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import NotFound from "../screens/not-found";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
