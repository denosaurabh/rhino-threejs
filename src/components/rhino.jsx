import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rhino(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/rhino.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={materials['Default OBJ']}
        rotation={[0, Math.PI*2.25, Math.PI]}
        position={[0, 100, 50]}
        scale={[0.2, 0.2, 0.2]}
      >
        <meshPhysicalMaterial reflectivity={0.9} />
      </mesh>
    </group>
  )
}

// useGLTF.preload('models/rhino.glb')
