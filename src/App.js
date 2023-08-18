import React, { Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import { OrbitControls, Box } from '@react-three/drei';
import { TextureLoader } from 'three';
import Model from './components/models/model';

export default function App() {
  const downTexture = new TextureLoader().load('/images/sky/down.png');
  const topTexture = new TextureLoader().load('/images/sky/up.png');
  const frontTexture = new TextureLoader().load('/images/sky/front.png');
  const backTexture = new TextureLoader().load('/images/sky/back.png');
  const leftTexture = new TextureLoader().load('/images/sky/left.png');
  const rightTexture = new TextureLoader().load('/images/sky/right.png');

  return (
    <Canvas
      camera={{ position: [1, 5, 10], fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} castShadow shadow-mapSize={[1024, 1024]} />
      
      {/* Add the 3D floor */}
      <group position={[0, -1, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <Box args={[50, 50, 0.1]} receiveShadow>
            <meshStandardMaterial map={downTexture} />
          </Box>
        </mesh>
      </group>
      {/* Add the 3D top */}
      <group position={[0, 3, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
          <Box args={[50, 50, 0.1]} receiveShadow>
            <meshStandardMaterial map={topTexture} />
          </Box>
        </mesh>
      </group>
      {/* Add the 3D front */}
      <group position={[0, 1, -25]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
          <Box args={[50, 0.1, 4]} receiveShadow>
            <meshStandardMaterial map={frontTexture} />
          </Box>
        </mesh>
      </group>
      {/* Add the 3D back */}
      <group position={[0, 1, 25]}>
        <mesh rotation={[Math.PI / 2, Math.PI /1, 0]} receiveShadow>
          <Box args={[50, 0.1, 4]} receiveShadow>
            <meshStandardMaterial map={backTexture} />
          </Box>
        </mesh>
      </group>
      {/* Add the 3D left */}
      <group position={[-25, 1, 0]}>
        <mesh rotation={[0, 0, 0]} receiveShadow>
          <Box args={[0.1, 4, 50]} receiveShadow>
            <meshStandardMaterial map={leftTexture} />
          </Box>
        </mesh>
      </group>
      {/* Add the 3D right */}
      <group position={[25, 1, 0]}>
        <mesh rotation={[0, 0, 0]} receiveShadow>
          <Box args={[0.1, 4, 50]} receiveShadow>
            <meshStandardMaterial map={rightTexture} />
          </Box>
        </mesh>
      </group>
      
      <Suspense fallback={null}>
        <Model position={[0, -0.9, 0]} castShadow />
      </Suspense>
      
      <OrbitControls />
    </Canvas>
  );
}