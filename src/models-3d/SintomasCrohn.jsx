import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

const SintomasCrohn = (props) => {
   const { scene } = useGLTF("img-3d/SintomasCrohn.glb");
   const sintomasRef = useRef();

   useEffect(() => {
      scene.scale.set(1.6, 1.6, 1.6);  // Tamaño (escala)
      scene.position.set(0.9, 1, 0.9);   // Posición [x, y, z]
   }, [scene]);

   useFrame((state, delta) => {
      if (sintomasRef.current) {
         sintomasRef.current.rotation.y += 0.2 * delta;
      }
   });

   return (
      <primitive
         ref={sintomasRef}
         object={scene}
         {...props}
         dispose={null}
         onClick={() => alert('Haz hecho clic en el modelo')}
         onPointerEnter={() => console.log('Puntero sobre el modelo')}
      />
   );
};

export default SintomasCrohn;

useGLTF.preload("img-3d/SintomasCrohn.glb");
