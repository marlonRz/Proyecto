import useAuthStore from "../../stores/use-auth-store";
import Button from "../../components/button/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const {userLooged, logout} = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() =>{
    logout().then(()=>{navigate("/");}).catch((error)=>{console.error("Error al cerrar sesion",error);});
  },[logout, navigate]);

  return (
    <>
      <h1>Perfil de usuario</h1>
      <p>!Bienvenido! {userLooged?.displayName}</p>
      <Button text="Cerrar Sesion" width="150px" height="50px" onClick={handleLogout}/>

    </>
  );
};

export default Profile;
