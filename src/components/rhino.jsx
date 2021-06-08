import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useControls } from "leva"
import { useAtom } from "jotai";

import rhinoTypesData from '@/helpers/rhinoTypesData'
import currentRhinoType from "@/helpers/rhinoTypesStore";

export default function Rhino() {
  const { metalness, roughness } = useControls({
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
  })
  
  const [currentType ] = useAtom(currentRhinoType)
  const { textureFileName } = rhinoTypesData[currentType];

  const group = useRef()

  const { nodes, materials } = useGLTF('models/rhino-draco.glb')
  nodes.Alfred_Jacquemart.geometry.center()

  const texture = useTexture(`/textures/${textureFileName}`)
  // texture.encoding = THREE.sRGBEncoding;

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
          // encoding={THREE.sRGBEncoding}
          metalness={metalness}
          roughness={roughness}
          needsUpdate={true}
        />
      </mesh>

    </group >
  )
}