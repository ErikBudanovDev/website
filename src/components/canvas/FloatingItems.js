import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import * as THREE from "three";
// const img = require("./meta.jpg");
const angleToRadianse = (angleInDeg) => (Math.PI / 180) * angleInDeg;
// console.log(img);

export default function FloatingIntems() {
  const meshRef = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const meshRef5 = useRef();
  const meshRef6 = useRef();
  const meshRef7 = useRef();

  const earth = useLoader(THREE.TextureLoader, "meta.jpg");
  const wp = useLoader(THREE.TextureLoader, "wp.png");
  const eth = useLoader(THREE.TextureLoader, "eth.png");
  const linkedin = useLoader(THREE.TextureLoader, "linkedin.png");
  const react = useLoader(THREE.TextureLoader, "react.svg");
  const insta = useLoader(THREE.TextureLoader, "insta.png");

  useFrame((state) => {
    // console.log("state", state);
    // console.log(state.clock.getElapsedTime());
    // console.log("mesh", meshRef);
    // meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.25;
    // console.log("state", state);
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef2.current.rotation.y = state.clock.getElapsedTime() * 0.3; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef3.current.rotation.y = state.clock.getElapsedTime() * 0.1; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef4.current.rotation.y = state.clock.getElapsedTime() * 0.5; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef5.current.rotation.y = state.clock.getElapsedTime() * 0.34; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef6.current.rotation.y = state.clock.getElapsedTime() * 0.4; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef7.current.rotation.y = state.clock.getElapsedTime() * 0.36; // meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    // OrbitControlsRef.current.setAzimuthalAngle(angleToRadianse(x * 2));
    // OrbitControlsRef.current.update();
    // console.log(state);
  });

  return (
    <>
      <mesh position={[0, 0, 0]} receiveShadow ref={meshRef} castShadow>
        <cylinderGeometry
          args={[1.02, 1.02, 0.2, 55, 11, true, 0, 0.2]}
          radialSegments={20}
        />
        <meshBasicMaterial
          map={earth}
          side={THREE.DoubleSide}
          //   lightMap={true}
        />
      </mesh>
      <mesh position={[0, -0.2, 0]} castShadow ref={meshRef2} receiveShadow>
        <cylinderGeometry
          args={[1.01, 1.01, 0.2, 55, 11, true, 0, 0.2]}
          radialSegments={30}
        />
        <meshBasicMaterial
          map={insta}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>

      <mesh position={[0, -0.2, 0]} castShadow ref={meshRef4}>
        <cylinderGeometry
          args={[1.06, 1.06, 0.2, 80, 55, true, 0, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#AEFFF1"}
          side={THREE.DoubleSide}
          map={react}
          transparent={true}
          //   fog={true}
        />
      </mesh>
      <mesh position={[0, -0.178, 0]} castShadow ref={meshRef5}>
        <cylinderGeometry
          args={[1.01, 1.01, 0.2, 80, 55, true, 0, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={linkedin}
          transparent={true}
        />
      </mesh>

      <mesh position={[0, -0.178, 0]} castShadow ref={meshRef6}>
        <cylinderGeometry
          args={[1.03, 1.03, 0.25, 80, 55, true, 0, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={eth}
          transparent={true}
        />
      </mesh>

      <mesh position={[0, -0.178, 0]} castShadow ref={meshRef7}>
        <cylinderGeometry
          args={[1.04, 1.04, 0.2, 80, 55, true, 0, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={wp}
          transparent={true}
        />
      </mesh>

      {/* empty lines */}

      <mesh position={[0, -0.3, 0]} castShadow ref={meshRef3} receiveShadow>
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 80, 55, true, 0, 0.4]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.3, 0]} castShadow ref={meshRef3} receiveShadow>
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 80, 55, true, 0, 0.4]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.2, 0]} castShadow ref={meshRef3} receiveShadow>
        <cylinderGeometry
          args={[1.001, 1.001, 0.4, 80, 55, true, 0, 0.8]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.3, 0]} castShadow ref={meshRef3} receiveShadow>
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 80, 55, true, 0, 0.4]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
