import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";

const Ligths = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);
    const hemisphereLightRef = useRef();
    useHelper(hemisphereLightRef, HemisphereLightHelper);
    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper)
    const PointLightRef = useRef();
    useHelper(PointLightRef, PointLightHelper, 2, "cyan");
    return ( 
        <>
            <hemisphereLight
            ref={hemisphereLightRef}
            color={"red"}
            groundColor={"blue"}
            intensity={2}/>
            <spotLight
            ref={spotLightRef}
            color={"red"}
            position={[4,2,-2]}
            distance={6}
            intensity={100}
            angle={Math.PI / 14}
            penumbra={1}/>
            <pointLight
            ref={PointLightRef}
            color={"cyan"}
            position={[0,2,-4]}
            intensity={5} />
            <ambientLight color={"#f5f5dc"} intensity={2}/>
            <directionalLight
            ref={directionalLightRef} castShadow={true} color={"yellow"} position={[0,5,5]} intensity={2} /> 
        </>
     );
}

export default Ligths;