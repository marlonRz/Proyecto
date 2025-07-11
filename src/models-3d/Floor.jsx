import { useTexture } from "@react-three/drei";
import { useMemo,useCallback,useRef } from "react";

const Floor = ( ) =>{
    const PATH = useMemo(()=>"/textures/floor/rectangle-polished-tile_",[]);
    const floor = useRef();
    const floorTexture = useTexture({
        map: `${PATH}albedo.png`,
        normalMap:`${PATH}normal-ogl.png`,
        roughnessMap:`${PATH}roughness.png`,
        //displacementMap:`${PATH}height.png`,
        aoMap:`${PATH}ao.png`,
        metalnessMap:`${PATH}metallic.png`,

        
    });

    const handleFloor = useCallback(() => {
        floor.current.children[0].material.color.setHSL(Math.random(), 1, 0.5);
       }, [floor]);

    return(
        <mesh rotation-x={-Math.PI/2} position={[0,-0.9,0]} receiveShadow={true} onClick={handleFloor}>
            <circleGeometry args={[2, 32]} />
            <meshStandardMaterial {...floorTexture} />
        </mesh>
    );
}
export default Floor;