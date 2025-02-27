import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/corazon",{
      state: { userData: { displayName: "Fabian Valencia"}},
    });
  });

  return (
    <>
      <div className="home">
        <h1>Inicio</h1>
        <button onClick={()=> navigate("/corazon")}>Ver mas enfermedades</button>
      </div>
    </>
  );
};

export default Home;