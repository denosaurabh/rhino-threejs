import React from 'react'
import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const OrbitalControl = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()

  return (
    <>
      <orbitControls args={[camera, domElement]} />
    </>
  )
}

export default OrbitalControl
