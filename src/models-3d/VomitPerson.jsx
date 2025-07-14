import { useGLTF, PositionalAudio, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const VomitPerson = (props) => {
  const { nodes, materials } = useGLTF("img-3d/VomitPerson.glb");
  const modelRef = useRef();
  const [scale, setScale] = useState(0.007);
  const [isVomiting, setIsVomiting] = useState(false);
  const audioRef = useRef();
  const { camera, mouse } = useThree();

  // Partículas de vómito
  const [vomitParticles, setVomitParticles] = useState([]);

  // Animación base + interacciones
  useFrame((state, delta) => {
    // Rotación automática suave
    modelRef.current.rotation.y += 0.2 * delta;

    // Inclinación con el mouse (eje X)
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      mouse.y * 0.2,
      0.1
    );

    // Generar partículas al vomitar
    if (isVomiting) {
      const newParticle = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          1,
          0.5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          -0.2,
          Math.random() * 0.3 + 0.2
        ),
        life: 100,
        size: Math.random() * 0.2 + 0.1
      };
      setVomitParticles(prev => [...prev, newParticle]);
    }

    // Actualizar partículas
    setVomitParticles(prev =>
      prev
        .map(p => ({
          ...p,
          position: p.position.clone().add(p.velocity),
          life: p.life - 1
        }))
        .filter(p => p.life > 0)
    );
  });

  // Evento de teclado (V para vomitar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'v') {
        setIsVomiting(true);
        if (audioRef.current) audioRef.current.play();
        setTimeout(() => setIsVomiting(false), 2000); // 2 segundos de vómito
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Evento de click (inflar al personaje)
  const handleClick = () => {
    setScale(0.01); // Crece
    setTimeout(() => setScale(0.007), 500); // Vuelve a la normalidad
  };

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group scale={scale} onClick={handleClick}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HumanVomit_1.geometry}
          material={materials['Cloths.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HumanVomit_2.geometry}
          material={materials['Human.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HumanVomit_3.geometry}
          material={materials['BlackMAT.001']}
        />
      </group>

      {vomitParticles.map((particle, idx) => (
        <mesh
          key={idx}
          position={particle.position}
          scale={[particle.size, particle.size, particle.size]}
        >
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshStandardMaterial 
            color="#ffcc00" 
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}

      <PositionalAudio
        ref={audioRef}
        url="/sounds/vomit.mp3"
        distance={5}
        loop={false}
      />

      
    </group>
  );
};

export default VomitPerson;

useGLTF.preload("img-3d/VomitPerson.glb");