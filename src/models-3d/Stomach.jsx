import { useGLTF,PositionalAudio } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef, useCallback, useEffect } from 'react';

const Stomach = (props) => {
   const { nodes, materials } = useGLTF("img-3d/Stomach.glb");
   const stomach3d = useRef();
   const isRotating = useRef(true);
   const audioRef = useRef();

   useFrame((state, delta) => {
      if (isRotating.current) {
         stomach3d.current.rotation.y += 0.2 * delta;
      }
    });

   const handleStomach = useCallback(() => {
      audioRef.current.play();
      audioRef.current.setVolume(5);

      // Detener después de 3 segundos (3000 ms)
      setTimeout(() => {
         audioRef.current.stop();
      }, 21000);

   }, [stomach3d, audioRef]);

   useEffect(() => {
      const handleKeyDown = (e) => {
         switch (e.key.toLowerCase()) {
            case 's':
               isRotating.current = !isRotating.current; // Pausa/reanuda rotación con 'S'
               break;
            case 'arrowleft':
               stomach3d.current.rotation.y -= 0.1; // Rota a la izquierda
               break;
            case 'arrowright':
               stomach3d.current.rotation.y += 0.1; // Rota a la derecha
               break;
         }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [handleStomach]);

    return( 
      <group ref={stomach3d} {...props} dispose={null} onClick={handleStomach}>
         <mesh
         castShadow
         receiveShadow
         geometry={nodes.Stomach_1.geometry}
         material={materials['material_0.001']}
         />
         <mesh
         castShadow
         receiveShadow
         geometry={nodes.Stomach_2.geometry}
         material={materials['defaultMat.001']}
         />
         <PositionalAudio
            ref={audioRef}
            loop
            url="/sounds/queEs.mp3"
            distance={5}
          />
    </group>
    ) ;

};

export default Stomach;

useGLTF.preload("img-3d/Stomach.glb");