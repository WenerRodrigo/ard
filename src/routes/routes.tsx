import { Routes, Route } from "react-router-dom";
import Home from "../screens/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
