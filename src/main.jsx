import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutWe from "./pages/about-we/AboutWe.jsx";
import Heart from "./pages/heart/Heart.jsx";
import App from "./App.jsx"
import Quiz from "./pages/quiz/Quiz.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Layout from "./layout/Layout.jsx";
import HighBloodPressure from "./pages/heart/high-blood-pressure/HighBloodPressure.jsx";
import LowBloodPressure from "./pages/heart/low-blood-pressure/LowBloodPressure.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="about-we" element={<AboutWe />} />
        <Route path="inicio-sesion" element={<Home />} />
        <Route path="perfil" element={<Profile/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="corazon" element={<Heart/>}>
          <Route path="presion-alta" element={<HighBloodPressure/>} />
          <Route path="presion-baja" element={<LowBloodPressure/>} />        
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);