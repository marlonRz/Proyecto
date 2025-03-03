import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate} from "react-router";
import Button from "../../components/button/Button.jsx"
import "./Home.css";


const Home = () => {
  const { loginGoogleWithPopUp} = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp().then(() =>navigate("perfil")).cath(() =>navigate("/"))
  }, [loginGoogleWithPopUp, navigate]);

  return (
    <>
      <div>
        <h2>Continua con Google</h2>
        <Button
          text="Iniciar sesión"
          width="150px"
          height="50px"
          type="button"
          title="Iniciar sesíón con Google"
          onClick={handleLogin}
        />
      </div>
  
    </>
  );
};

export default Home;
