import React, { useRef } from 'react';
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function FrozenSprites() {
  const bckgrnd1Ref = useRef();
  const bckgrnd2Ref = useRef();
  const { camera } = useThree();

  const bckgrnd1 = useLoader(THREE.TextureLoader, "bckgrnd2.png");
  const bckgrnd2 = useLoader(THREE.TextureLoader, "bckgrnd.png");

  useFrame(() => {
    if (bckgrnd1Ref.current && camera) {
      bckgrnd1Ref.current.position.copy(camera.position);
      bckgrnd1Ref.current.position.z -= 1;  // Adjust as needed
    }
    if (bckgrnd2Ref.current && camera) {
      bckgrnd2Ref.current.position.copy(camera.position);
      bckgrnd2Ref.current.position.z -= 1.1;  // Adjust as needed
    }
  });

  return (
    <>
      <sprite ref={bckgrnd1Ref} position={[-0.14, 0.1, -1]} scale={[1, 1, 0]} castShadow receiveShadow>
        <spriteMaterial
          map={bckgrnd1}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </sprite>

      <sprite ref={bckgrnd2Ref} position={[-0.14, 0, -1]} scale={[3.3, 2.5, 4]} castShadow receiveShadow>
        <spriteMaterial
          map={bckgrnd2}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </sprite>
    </>
  );
}

export default FrozenSprites;
