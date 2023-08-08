import * as THREE from 'three';
import { useRef, useEffect, useState, Suspense } from 'react';
import { useThree, useFrame, ThreeElements } from '@react-three/fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';

import StlModel from '@modules/common/components/stl-model';
import Lights from '@modules/common/components/lights';

import { Vector3, PointLight, DirectionalLight } from 'three';

const heroMinis = [
  {
    name: 'Storm Lord',
    url: "models/full_storm_lord.stl",
    scale: new Vector3(0.04, 0.04, 0.04),
    initialPosition: new Vector3(0, 0, -1.3),
    cameraPosition: new Vector3(-2, 0, 8),
    directionalLightPosition: new Vector3(2, 3, 0),
  }
];

const LoadingScene = () => (
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
);

const HeroScene = () => {
  const stlRef = useRef<THREE.Mesh>(null!);
  const cube = useRef<THREE.Mesh>(null!);
  const lightRef = useRef<THREE.SpotLight>(null!);

  const directionalLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  
  const { camera } = useThree();

  const [displayedMini] = useState(heroMinis[Math.floor(Math.random() * heroMinis.length)]);

  // useFrame(({clock}) => {
  //   if (stlRef.current) {
  //     stlRef.current.rotation.y = clock.getElapsedTime();
  //   }
  // });

  return (
    <>
      <Suspense fallback={<LoadingScene />}>
        <Lights
          directionalLightRef={directionalLightRef}
          pointLightRef={pointLightRef}
          directionalLightPosition={displayedMini.directionalLightPosition}
        />
        <PerspectiveCamera makeDefault fov={40} position={displayedMini.cameraPosition} />
        {/* <pointLight ref={lightRef} position={[-5, 1, 0]} /> */}
        {/* <spotLight
        ref={lightRef}
        position={[-2, 6, 6]}
        penumbra={1}
        distance={0}
        angle={Math.PI / 6}
        map={lightTexture}
        decay={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-focus={1}
        /> */}

        <StlModel position={displayedMini.initialPosition} scale={displayedMini.scale} stlRef={stlRef} url={displayedMini.url} />
        {/* <OrbitControls enableDamping={false} regress /> */}
      </Suspense>
    </>
  );
};

export default HeroScene;
