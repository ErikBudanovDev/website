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
    meshRef1.current.rotation.y = state.clock.getElapsedTime()* 0.35 
    meshRef2.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef3.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef4.current.rotation.y = state.clock.getElapsedTime() *0.35 
    meshRef5.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef6.current.rotation.y = state.clock.getElapsedTime() *0.35 
    meshRef7.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef8.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef9.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef10.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef11.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef12.current.rotation.y = state.clock.getElapsedTime() * 0.35; 
    meshRef13.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef14.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef15.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef16.current.rotation.y = state.clock.getElapsedTime() * 0.35 
    meshRef17.current.rotation.y = state.clock.getElapsedTime() * 0.35  
    meshRef18.current.rotation.y = state.clock.getElapsedTime() * 0.35  


    meshRef19.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef20.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef21.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef22.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef23.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef24.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef25.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef26.current.rotation.y = state.clock.getElapsedTime() * 1; 
    meshRef27.current.rotation.y = state.clock.getElapsedTime() * 1; 
  });

  return (
    <>
      {/* google */}
      <mesh position={[0, 0.1, 0]} receiveShadow ref={meshRef1} >
        <cylinderGeometry
          args={[1.105, 1.105, 0.14, 55, 11, true, 5.5, 0.14]}
          radialSegments={25}
        />
        <meshBasicMaterial
          map={google}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
      {/* reddit */}
      <mesh position={[0, -0.4, 0]} receiveShadow ref={meshRef2} >
        <cylinderGeometry
          args={[1.111, 1.111, 0.2, 55, 11, true, 0.7, 0.2]}
          radialSegments={20}
        />
        <meshBasicMaterial
          map={reddit}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
      {/* facebook */}
      <mesh position={[0, 0.01, 0]} receiveShadow ref={meshRef3} >
        <cylinderGeometry
          args={[1.1, 1.1, 0.1, 55, 11, true, 6, 0.1]}
          radialSegments={20}
        />
        <meshBasicMaterial
          map={face}
          side={THREE.DoubleSide}
          transparent={true}
          //   lightMap={true}
        />
      </mesh>
      {/* instagram */}
      <mesh position={[0, -0.25, 0]}  ref={meshRef4} >
        <cylinderGeometry
          args={[1.21, 1.21, 0.1, 55, 11, true, 1, 0.1]}
          radialSegments={30}
        />
        <meshBasicMaterial
          map={insta}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
      {/* react */}
      <mesh position={[0, -0.33, 0]}  ref={meshRef5}>
        <cylinderGeometry
          args={[1.166, 1.166, 0.14, 80, 55, true, 0.5, 0.14]}
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
      {/* linkedin */}
      <mesh position={[0, -0.2, 0]}  ref={meshRef6}>
        <cylinderGeometry
          args={[1.317, 1.317, 0.14, 80, 55, true, 4.2, 0.12]}
          radialSegments={60}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={linkedin}
          transparent={true}
        />
      </mesh>
      {/* etherium */}
      <mesh position={[0, -0.22, 0]}  ref={meshRef7}>
        <cylinderGeometry
          args={[1.233, 1.233, 0.25, 80, 55, true, 0.23, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={eth}
          transparent={true}
        />
      </mesh>
      {/* wordpress */}
      <mesh position={[0, -0.33, 0]}  ref={meshRef8}>
        <cylinderGeometry
          args={[1.2212, 1.2212, 0.2, 80, 55, true, 5.8, 0.2]}
          radialSegments={40}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={wp}
          transparent={true}
        />
      </mesh>
      {/* vimeo */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef9}>
        <cylinderGeometry
          args={[1.3, 1.3, 0.1, 40, 55, true, 0.5, 0.1]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={vimeo}
          transparent={true}
        />
      </mesh>
      {/* snapchat */}
      <mesh position={[0, -0.22, 0]}  ref={meshRef10}>
        <cylinderGeometry
          args={[1.14133, 1.14133, 0.2, 40, 35, true, 2.2, 0.2]}
          radialSegments={20}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={snapchat}
          transparent={true}
        />
      </mesh>
      {/* whatsapp */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef11}>
        <cylinderGeometry
          args={[1.13145, 1.13145, 0.2, 40, 55, true, 1.8, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={whatsapp}
          transparent={true}
        />
      </mesh>
      {/* youtube */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef12}>
        <cylinderGeometry
          args={[1.12217, 1.12217, 0.2, 40, 55, true, 2.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={youtube}
          transparent={true}
        />
      </mesh>
      {/* skype */}
      <mesh position={[0, -0.32, 0]}  ref={meshRef13}>
        <cylinderGeometry
          args={[1.1118, 1.1118, 0.2, 40, 55, true, 3.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={skype}
          transparent={true}
        />
      </mesh>
      {/* twitter */}
      <mesh position={[0, -0.1, 0]} castShadow ref={meshRef14}>
        <cylinderGeometry
          args={[1.1115, 1.1115, 0.2, 40, 55, true, 1.35, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={twitter}
          transparent={true}
        />
      </mesh>
      {/* pinterest */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef15}>
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
      </mesh>
      {/* discord */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef16}>
        <cylinderGeometry
          args={[1.1183, 1.1183, 0.2, 40, 55, true, 4.5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={discord}
          transparent={true}
        />
      </mesh>
      {/* behance */}
      <mesh position={[0, -0.1, 0]} castShadow ref={meshRef17}>
        <cylinderGeometry
          args={[1.1171, 1.1171, 0.2, 40, 55, true, 3.85, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={behance}
          transparent={true}
        />
      </mesh>
      {/* dribble */}
      <mesh position={[0, -0.1, 0]}  ref={meshRef18}>
        <cylinderGeometry
          args={[1.11614, 1.11614, 0.2, 40, 55, true, 5, 0.2]}
          radialSegments={30}
        />
        <meshStandardMaterial
          color={"#FFFFFF"}
          side={THREE.DoubleSide}
          map={dribble}
          transparent={true}
        />
      </mesh>
    

      {/* empty lines */}
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      {/* // */}
      <mesh position={[0, -0.33, 0]}  ref={meshRef19} >
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 44, 55, true, 0, 0.4]}
          radialSegments={30}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.10, 0]}  ref={meshRef20} >
        <cylinderGeometry
          args={[1.0412, 1.0412, 0.03, 80, 55, true, 0.51, 2]}
          radialSegments={80}
        />
        <meshBasicMaterial color={"#AF76F7"} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, -0.007, 0]} castShadow ref={meshRef21} >
        <cylinderGeometry
          args={[1.03, 1.03, 0.1, 80, 55, true, 1.8, 0.4]}
          radialSegments={40}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} />
      </mesh>


      <mesh position={[0, -0.15, 0]} castShadow ref={meshRef22} >
        <cylinderGeometry
          args={[1.044111, 1.044111, 0.22, 40, 4, true, 3.8, 0.6]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>


      <mesh position={[0, -0.22, 0]}  ref={meshRef23} >
        <cylinderGeometry
          args={[1.08331, 1.08331, 0.18, 20, 5, true, 4.8, 0.45]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#AEFFF1"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>

      <mesh position={[0, -0.1, 0]}  ref={meshRef24} >
        <cylinderGeometry
          args={[1.076, 1.076, 0.1, 8, 4.5, true, 5.5, 0.5]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#8F90F8"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>


      <mesh position={[0, -0.22, 0]}  ref={meshRef25} >
        <cylinderGeometry
          args={[1.0411, 1.0411, 0.13, 10, 5, true, 2.4, 0.65]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#9A86F8"} side={THREE.DoubleSide} transparent={true}/>
      </mesh> 


      <mesh position={[0, -0.41, 0]}  ref={meshRef26} >
        <cylinderGeometry
          args={[1.09221, 1.09221, 0.1, 10, 5, true, 0, 0.65]}
          radialSegments={10}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh>
      <mesh position={[0, -0.31, 0]}  ref={meshRef27} >
        <cylinderGeometry
          args={[1.0851, 1.0851, 0.13, 10, 2, true, 0.8, 0.65]}
          radialSegments={2}
        />
        <meshBasicMaterial color={"#6EAAF9"} side={THREE.DoubleSide} transparent={true}/>
      </mesh> 
    </>
  );
}
