import React, { useEffect, useRef } from 'react'
import { sRGBEncoding } from 'three'
import { useGLTF, useTexture, Box, Reflector } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useControls } from "leva"

export default function Rhino(props) {
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

  // const { rotateY, metalness, roughness } = {
  //   rotateY: 0.35,
  //   metalness: 0,
  //   roughness: 0,
  // }


  const group = useRef()
  const rhinoMesh = useRef()

  const setRhino = useStore(state => state.setRhino)

  useEffect(() => {
    if (rhinoMesh.current) {
      setRhino(rhinoMesh.current)
    }

  }, [rhinoMesh.current])

  const { nodes, materials } = useGLTF('models/rhino-draco.glb')
  nodes.Alfred_Jacquemart.geometry.center()

  const texture = useTexture(`/textures/gold.jpg`)
  // texture.encoding = sRGBEncoding;

  let material = materials['Default OBJ'];

  return (
    <group ref={group}>
      <mesh
        ref={rhinoMesh}
        geometry={nodes.Alfred_Jacquemart.geometry}
        material={material}
        rotation={[0, Math.PI * 1.8, Math.PI]} // Math.PI * 1.8
        // position={[0, 100, 50]}
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

// useGLTF.preload('models/rhino.glb')

/*

<Reflector
args={[1000, 1000]} // PlaneBufferGeometry arguments
position={[0, -60, 0]}
rotation={[Math.PI*-0.5, 0, 0]}
resolution={1080} // Off-buffer resolution, lower=faster, higher=better quality
mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
mixBlur={1.0} // How much blur mixes with surface roughness (default = 0), note that this can affect performance
mixStrength={0.5} // Strength of the reflections
depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
distortion={0} // Amount of distortion based on the distortionMap texture
debug={0}
>
{(Material, props) => <Material {...props} />}
// <Box args={[10000, 10000, 0.2]} position={[0, -60, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
//  <meshPhysicalMaterial color="#fff" />
// </Box>
</Reflector>

*/