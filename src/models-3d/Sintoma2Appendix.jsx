import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Sintoma2Appendix3d = (props) => {
  const Sisitema2Appendixmodel = useGLTF("img-3d/Sintoma2Appendix.glb");

  useEffect(() => {
    console.log(Sisitema2Appendixmodel);
  }, [Sisitema2Appendixmodel]);

  return (
    <primitive
      object={Sisitema2Appendixmodel.scene}
      {...props}
      castShadow
      receiveShadow
    />
  );
};

export default Sintoma2Appendix3d;

useGLTF.preload("img-3d/Sintoma2Appendix.glb");
