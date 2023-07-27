import { useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import * as THREE from "three";
// const img = require("./meta.jpg");
const angleToRadianse = (angleInDeg) => (Math.PI / 180) * angleInDeg;
// console.log(img);

export default function FloatingIntems() {
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const meshRef5 = useRef();
  const meshRef6 = useRef();
  const meshRef7 = useRef();
  const meshRef8 = useRef();
  const meshRef9 = useRef();
  const meshRef10 = useRef();
  const meshRef11 = useRef();
  const meshRef12 = useRef();
  const meshRef13 = useRef();
  const meshRef14 = useRef();
  const meshRef15 = useRef();
  const meshRef16 = useRef();
  const meshRef17 = useRef();
  const meshRef18 = useRef();
  const meshRef19 = useRef();
  const meshRef20 = useRef();
  const meshRef21 = useRef();
  const meshRef22 = useRef();
  const meshRef23 = useRef();
  const meshRef24 = useRef();
  const meshRef25 = useRef();
  const meshRef26 = useRef();
  const meshRef27 = useRef();

  const google = useLoader(THREE.TextureLoader, "google.png");
  const wp = useLoader(THREE.TextureLoader, "wp.png");
  const eth = useLoader(THREE.TextureLoader, "eth.png");
  const linkedin = useLoader(THREE.TextureLoader, "linkedin.png");
  const react = useLoader(THREE.TextureLoader, "react.svg");
  const insta = useLoader(THREE.TextureLoader, "insta.png");
  const face = useLoader(THREE.TextureLoader, "face.png");
  const reddit = useLoader(THREE.TextureLoader, "reddit.png");
  const vimeo = useLoader(THREE.TextureLoader, "vimeo.png");
  const snapchat = useLoader(THREE.TextureLoader, "snapchat.png");
  const whatsapp = useLoader(THREE.TextureLoader, "whatsapp.png");
  const youtube = useLoader(THREE.TextureLoader, "youtube.png");
  const skype = useLoader(THREE.TextureLoader, "skype.png");
  const twitter = useLoader(THREE.TextureLoader, "twitter.png");
  const pinterest = useLoader(THREE.TextureLoader, "pinterest.png");
  const discord = useLoader(THREE.TextureLoader, "discord.png");
  const behance = useLoader(THREE.TextureLoader, "behance.png");
  const dribble = useLoader(THREE.TextureLoader, "dribble.png");

  useFrame((state) => {
    // meshRef1.current.rotation.y = state.clock.getElapsedTime() * 1; 
    // meshRef2.current.rotation.y = state.clock.getElapsedTime() * 0.9; 
    // meshRef3.current.rotation.y = state.clock.getElapsedTime() * 0.8; 
    // meshRef4.current.rotation.y = state.clock.getElapsedTime() * 0.7; 
    // meshRef5.current.rotation.y = state.clock.getElapsedTime() * 0.6; 
    // meshRef6.current.rotation.y = state.clock.getElapsedTime() * 0.66; 
    // meshRef7.current.rotation.y = state.clock.getElapsedTime() * 1.1; 
    // meshRef8.current.rotation.y = state.clock.getElapsedTime() * 1.36; 
    // meshRef9.current.rotation.y = state.clock.getElapsedTime() * 1.2; 
    // meshRef10.current.rotation.y = state.clock.getElapsedTime() * 1.1; 
    // meshRef11.current.rotation.y = state.clock.getElapsedTime() * 1.13; 
    // meshRef12.current.rotation.y = state.clock.getElapsedTime() * 1.25; 
    // meshRef13.current.rotation.y = state.clock.getElapsedTime() * 1.17; 
    // meshRef14.current.rotation.y = state.clock.getElapsedTime() * 1.3; 
    // meshRef15.current.rotation.y = state.clock.getElapsedTime() * 1.3; 
    // meshRef16.current.rotation.y = state.clock.getElapsedTime() * 0.7; 
    // meshRef17.current.rotation.y = state.clock.getElapsedTime() * 0.223; 
    // meshRef18.current.rotation.y = state.clock.getElapsedTime() * 0.63; 
    // meshRef19.current.rotation.y = state.clock.getElapsedTime() * 7.7; 
    // meshRef20.current.rotation.y = state.clock.getElapsedTime() * 1.53; 
    // meshRef21.current.rotation.y = state.clock.getElapsedTime() * 2.43; 
    // meshRef22.current.rotation.y = state.clock.getElapsedTime() * 0.33; 
    // meshRef23.current.rotation.y = state.clock.getElapsedTime() * 0.28; 
    // meshRef24.current.rotation.y = state.clock.getElapsedTime() * 0.33; 
    // meshRef25.current.rotation.y = state.clock.getElapsedTime() * 0.23; 
    // meshRef26.current.rotation.y = state.clock.getElapsedTime() * 1.3; 
    // meshRef27.current.rotation.y = state.clock.getElapsedTime() * 1.13; 
  });

  return (
    <>
      {/* google */}
      {/* <mesh position={[0, 0.1, 0]} receiveShadow ref={meshRef1} castShadow>
        <cylinderGeometry
          args={[1.02, 1.02, 0.2, 55, 11, true, 5.5, 0.2]}
          radialSegments={25}
        />
        <meshBasicMaterial
          map={google}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh> */}
      {/* reddit */}
      {/* <mesh position={[0, -0.4, 0]} receiveShadow ref={meshRef2} castShadow>
        <cylinderGeometry
          args={[1.02, 1.02, 0.2, 55, 11, true, 5.7, 0.2]}
          radialSegments={20}
        />
        <meshBasicMaterial
          map={reddit}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh> */}
      {/* facebook */}
      {/* <mesh position={[0, 0.01, 0]} receiveShadow ref={meshRef3} castShadow>
        <cylinderGeometry
          args={[1.1, 1.1, 0.2, 55, 11, true, 6, 0.2]}
          radialSegments={20}
        />
        <meshBasicMaterial
          map={face}
          side={THREE.DoubleSide}
          transparent={true}
          //   lightMap={true}
        />
      </mesh> */}
      {/* instagram */}
      {/* <mesh position={[0, -0.25, 0]} castShadow ref={meshRef4} receiveShadow>
        <cylinderGeometry
          args={[1.11, 1.11, 0.2, 55, 11, true, 1, 0.2]}
          radialSegments={30}
        />
        <meshBasicMaterial
          map={insta}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh> */}
      {/* react */}
      {/* <mesh position={[0, -0.33, 0]} castShadow ref={meshRef5}>
        <cylinderGeometry
          args={[1.06, 1.06, 0.2, 80, 55, true, 0.5, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#AEFFF1"}
          side={THREE.DoubleSide}
          map={react}
          transparent={true}
          //   fog={true}
        />
      </mesh> */}
      {/* linkedin */}
      {/* <mesh position={[0, -0.2, 0]} castShadow ref={meshRef6}>
        <cylinderGeometry
          args={[1.07, 1.07, 0.2, 80, 55, true, 0.1, 0.2]}
          radialSegments={60}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={linkedin}
          transparent={true}
        />
      </mesh> */}
      {/* etherium */}
      {/* <mesh position={[0, -0.22, 0]} castShadow ref={meshRef7}>
        <cylinderGeometry
          args={[1.03, 1.03, 0.25, 80, 55, true, 0.3, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={eth}
          transparent={true}
        />
      </mesh> */}
      {/* wordpress */}
      {/* <mesh position={[0, -0.178, 0]} castShadow ref={meshRef8}>
        <cylinderGeometry
          args={[1.02, 1.02, 0.2, 80, 55, true, 5.6, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={wp}
          transparent={true}
        />
      </mesh> */}
      {/* vimeo */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef9}>
        <cylinderGeometry
          args={[1.2, 1.2, 0.2, 40, 55, true, 0.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={vimeo}
          transparent={true}
        />
      </mesh> */}
      {/* snapchat */}
      {/* <mesh position={[0, -0.22, 0]} castShadow ref={meshRef10}>
        <cylinderGeometry
          args={[1.03, 1.03, 0.2, 40, 35, true, 2.2, 0.2]}
          radialSegments={20}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={snapchat}
          transparent={true}
        />
      </mesh> */}
      {/* whatsapp */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef11}>
        <cylinderGeometry
          args={[1.045, 1.045, 0.2, 40, 55, true, 1.8, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={whatsapp}
          transparent={true}
        />
      </mesh> */}
      {/* youtube */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef12}>
        <cylinderGeometry
          args={[1.07, 1.07, 0.2, 40, 55, true, 2.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={youtube}
          transparent={true}
        />
      </mesh> */}
      {/* skype */}
      {/* <mesh position={[0, -0.32, 0]} castShadow ref={meshRef13}>
        <cylinderGeometry
          args={[1.018, 1.018, 0.2, 40, 55, true, 3.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={skype}
          transparent={true}
        />
      </mesh> */}
      {/* twitter */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef14}>
        <cylinderGeometry
          args={[1.015, 1.015, 0.2, 40, 55, true, 1.35, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={twitter}
          transparent={true}
        />
      </mesh> */}
      {/* pinterest */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef15}>
        <cylinderGeometry
          args={[1.12, 1.12, 0.2, 40, 55, true, 2.9, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={pinterest}
          transparent={true}
        />
      </mesh> */}
      {/* discord */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef16}>
        <cylinderGeometry
          args={[1.083, 1.083, 0.2, 40, 55, true, 4.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={discord}
          transparent={true}
        />
      </mesh> */}
      {/* behance */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef17}>
        <cylinderGeometry
          args={[1.071, 1.071, 0.2, 40, 55, true, 3.85, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={behance}
          transparent={true}
        />
      </mesh> */}
      {/* dribble */}
      {/* <mesh position={[0, -0.1, 0]} castShadow ref={meshRef18}>
        <cylinderGeometry
          args={[1.0614, 1.0614, 0.2, 40, 55, true, 5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={dribble}
          transparent={true}
        />
      </mesh> */}
    

      {/* empty lines */}
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      <mesh position={[0, -0.3, 0]} castShadow ref={meshRef19} receiveShadow>
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 44, 55, true, 0, 0.4]}
          radialSegments={30}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.10, 0]} castShadow ref={meshRef20} receiveShadow>
        <cylinderGeometry
          args={[1.12, 1.12, 0.03, 80, 55, true, 0.51, 2]}
          radialSegments={80}
        />
        <meshBasicMaterial color={"#AF76F7"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0.007, 0]} castShadow ref={meshRef21} receiveShadow>
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 80, 55, true, 1.8, 0.4]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>


      <mesh position={[0, -0.15, 0]} castShadow ref={meshRef22} receiveShadow>
        <cylinderGeometry
          args={[1.111, 1.111, 0.22, 40, 4, true, 3.5, 0.6]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>


      <mesh position={[0, -0.1, 0]} castShadow ref={meshRef23} receiveShadow>
        <cylinderGeometry
          args={[1.011, 1.011, 0.18, 20, 5, true, 4.8, 0.45]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#BE69F6"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>

      <mesh position={[0, -0.1, 0]} castShadow ref={meshRef24} receiveShadow>
        <cylinderGeometry
          args={[1.16, 1.16, 0.1, 8, 4.5, true, 5.5, 0.5]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#8F90F8"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>


      <mesh position={[0, -0.22, 0]} castShadow ref={meshRef25} receiveShadow>
        <cylinderGeometry
          args={[1.11, 1.11, 0.13, 10, 5, true, 2.4, 0.65]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#9A86F8"} side={THREE.DoubleSide} transparent={true}/>
      </mesh> 


      <mesh position={[0, -0.1, 0]} castShadow ref={meshRef26} receiveShadow>
        <cylinderGeometry
          args={[1.221, 1.221, 0.1, 10, 5, true, 0, 0.65]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>
      <mesh position={[0, -0.31, 0]} castShadow ref={meshRef27} receiveShadow>
        <cylinderGeometry
          args={[1.051, 1.051, 0.13, 10, 2, true, 0.8, 0.65]}
          radialSegments={2}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh> 
    </>
  );
}
