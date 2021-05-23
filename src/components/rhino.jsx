import React, { useRef } from 'react'
import { sRGBEncoding } from 'three'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Rhino(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/rhino-draco.glb')

  const texture = useTexture('/textures/silver.jpg')
  texture.encoding = sRGBEncoding;
  // texture.transformUv = 

  let material = materials['Default OBJ'];

  material.map = texture;
  material.metalness = 1;
  material.roughness = 0.6;


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={material}
        rotation={[0, Math.PI * 1.8, Math.PI]} // Math.PI * 2.25
        position={[0, 100, 50]}
        scale={[0.2, 0.2, 0.2]}
      >
        {/* <meshPhysicalMaterial map={texture} metalness={1} roughness={0.1} /> */}
      </mesh>
    </group>
  )
}

// useGLTF.preload('models/rhino.glb')
