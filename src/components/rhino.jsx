import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Rhino(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/rhino-draco.glb')

  const texture = useTexture('/textures/gold.jpg')
  let material = materials['Default OBJ'];
  
  // material.alphaMap = texture;
  // material.map = texture;
  // material.color = '#ffffff';
  material.metalness = 1;
  material.roughness = 0.1;
  // material.reflectivity = 0;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={material}
        rotation={[0, Math.PI * 2.25, Math.PI]}
        position={[0, 100, 50]}
        scale={[0.2, 0.2, 0.2]}
      >
        {/* <meshPhysicalMaterial map={texture} metalness={1} roughness={0.1} /> */}
      </mesh>
    </group>
  )
}

// useGLTF.preload('models/rhino.glb')
