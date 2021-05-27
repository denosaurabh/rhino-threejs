import React, { useEffect, useRef } from 'react'
import { sRGBEncoding } from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useControls } from "leva"

export default function Rhino(props) {
  const { rotateY, metalness, roughness } = useControls({
    rotateY: {
      value: 0.35,
      min: 0,
      max: 2,
      step: 0.001,
    },
    metalness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
    roughness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
  })

  const group = useRef()
  const rhinoMesh = useRef()

  const setRhino = useStore(state => state.setRhino)

  useEffect(() => {
    if (rhinoMesh.current) {
      setRhino(rhinoMesh.current)
    }

  }, [rhinoMesh.current])

  const { nodes, materials } = useGLTF('models/rhino-draco.glb')

  const texture = useTexture(`/textures/silver.jpg`)
  texture.encoding = sRGBEncoding;

  let material = materials['Default OBJ'];

  return (
    <group ref={group} {...props} dispose={material}>
      <mesh
        ref={rhinoMesh}
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={material}
        rotation={[0, Math.PI * rotateY, Math.PI]} // Math.PI * 1.8
        position={[0, 100, 50]}
        scale={[0.2, 0.2, 0.2]}
      >
        <meshPhysicalMaterial
          map={texture}
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

// useGLTF.preload('models/rhino.glb')
