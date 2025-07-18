import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Sintoma1Appendix3d = (props) => {
  const Sisitema1Appendixmodel = useGLTF("img-3d/Sintoma1Appendix.glb");

  useEffect(() => {
    console.log(Sisitema1Appendixmodel);
  }, [Sisitema1Appendixmodel]);

  return (
    <primitive
      object={Sisitema1Appendixmodel.scene}
      {...props}
      castShadow
      receiveShadow
    />
  );
};

export default Sintoma1Appendix3d;

useGLTF.preload("img-3d/Sintoma1Appendix.glb");
