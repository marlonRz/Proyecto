import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Sintoma3Appendix3d = (props) => {
  const Sisitema3Appendixmodel = useGLTF("img-3d/Sintoma3Appendix.glb");

  useEffect(() => {
    console.log(Sisitema3Appendixmodel);
  }, [Sisitema3Appendixmodel]);

  return (
    <primitive
      object={Sisitema3Appendixmodel.scene}
      {...props}
      castShadow
      receiveShadow
    />
  );
};

export default Sintoma3Appendix3d;

useGLTF.preload("img-3d/Sintoma3Appendix.glb");
