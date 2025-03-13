import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const Floor = ( ) =>{
    const PATH = useMemo(()=>"/textures/floor/rectangle-polished-tile_",[]);
    const floorTexture = useTexture({
        map: `${PATH}albedo.png`,
        normalMap:`${PATH}normal-ogl.png`,
        roughnessMap:`${PATH}roughness.png`,
        displacementMap:`${PATH}height.png`,
        aoMap:`${PATH}ao.png`,
        metalnessMap:`${PATH}metallic.png`,

        
    });
    return(
        <mesh rotation-x={-Math.PI} position-y={-1}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap} 
            aoMap={floorTexture.aoMap}
            metalness={floorTexture.metalnessMap}/>
        </mesh>
    );
}
export default Floor;