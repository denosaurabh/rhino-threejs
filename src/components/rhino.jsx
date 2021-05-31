import React, { useRef } from 'react'
import { sRGBEncoding } from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useControls } from "leva"

export default function Rhino() {
  const { metalness, roughness, color } = useControls({
    metalness: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    roughness: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    color: '#c3c9d5'
  })

  const group = useRef()

  const { nodes, materials } = useGLTF('models/rhino-draco.glb')
  nodes.Alfred_Jacquemart.geometry.center()

  const texture = useTexture(`/textures/gold.jpg`)
  // texture.encoding = sRGBEncoding;

  let material = materials['Default OBJ'];

  return (
    <group ref={group}>
      <mesh
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={material}
        rotation={[0, Math.PI * 1.8, Math.PI]}
        scale={[0.2, 0.2, 0.2]}
      >
        <meshPhysicalMaterial
          map={texture}
          // color={color}
          encoding={sRGBEncoding}
          metalness={metalness}
          roughness={roughness}
          reflectivity={0}
          needsUpdate={true}
        />
      </mesh>

    </group >
  )
}