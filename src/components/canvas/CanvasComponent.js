import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import FloatingIntems from "./FloatingItems";
// const img = require("./meta.jpg");
const angleToRadianse = (angleInDeg) => (Math.PI / 180) * angleInDeg;
// console.log(img);

export function Three() {
  const OrbitControlsRef = useRef(null);
  const textureLady = useLoader(THREE.TextureLoader, "digiLady.png");
  const bckgrnd1 = useLoader(THREE.TextureLoader, "bckgrnd2.png");
  const bckgrnd2 = useLoader(THREE.TextureLoader, "bckgrnd.png");

  const stars = useLoader(THREE.TextureLoader, "stars.png");

  useEffect(() => {
    if (!!OrbitControlsRef.current) {
      console.log(OrbitControlsRef.current);
    }
  }, [OrbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[1.3, -0.9, 2]} />
      <OrbitControls
        ref={OrbitControlsRef}
        enabled={true}
        // target={meshRef3.current.position}
        // autoRotate={true}
        // autoRotateSpeed={6}
        maxPolarAngle={angleToRadianse(113)}
        minPolarAngle={angleToRadianse(110)}
      />
      {/* This is the 3D Object */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <cylinderGeometry args={[1, 1, 0.4, 55, 11, true, 0, 8]} />
        <meshStandardMaterial color="#60A597" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.2, 0]} receiveShadow castShadow>
        <cylinderGeometry
          args={[0.95, 0.95, 0.4, 55, 11, true, 0, 8]}
          radialSegments={64}
        />
        <meshStandardMaterial
          color="#60A597"
          // metalness={0.6}
          // roughness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        rotation={[-angleToRadianse(90), 0, 0]}
        position={[0, -0.4, 0]}
        receiveShadow
        castShadow
      >
        <ringGeometry args={[1, 0.95, 90]} />
        <meshStandardMaterial
          radialSegments={64}
          color="#60A597"
          //   metalness={0.6}
          //   roughness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Floating items */}
      <FloatingIntems />

      {/* Lady */}
      <sprite
        position={[0, -0.5, 0]}
        scale={[1.4, 1.4, 0]}
        castShadow
        receiveShadow
      >
        <spriteMaterial
          map={textureLady}
          transparent={true}
          side={THREE.DoubleSide}
          //   opacity={0.5}
          //   color={"#272727"}
        />
        {/* <planeGeometry args={[2, 2]} /> */}
      </sprite>

      <sprite position={[0, 0, 0]} scale={[90, 80, 0]} castShadow>
        <spriteMaterial map={stars} transparent={true} />
        {/* <planeGeometry args={[2, 2]} /> */}
      </sprite>

      {/* Background */}
      <sprite position={[0, 0, 0]} scale={[3, 2, 4]} castShadow receiveShadow>
        <spriteMaterial
          map={bckgrnd1}
          transparent={true}
          side={THREE.DoubleSide}
        />
        {/* <planeGeometry args={[2, 2]} /> */}
      </sprite>

      {/* The 3D object needs a light */}
      <ambientLight args={["#ffffff", 0.3]} />
      {/* <spotLight
        args={["#ffffff", 1.5, 7, angleToRadianse(55), 0.1]}
        position={[0, 0, 3]}
        castShadow
      /> */}
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadianse(55), 1]}
        position={[0, 1, 0]}
        // castShadow
      />
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadianse(55), 1]}
        position={[2, 0, -2]}
        // castShadow
      />
      {/* Environment */}
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide} color={"#0C1640"} />
        </mesh>
      </Environment>
    </>
  );
}

export default function CanvasComponent() {
  return (
    <Suspense fallback={null}>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </Suspense>
    // </Suspense>
  );
}
