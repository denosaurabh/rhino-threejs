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
        rotation={[0, 0, Math.PI]}
      />
    </group>
  )
}

// useGLTF.preload('models/rhino.glb')
