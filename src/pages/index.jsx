import { useState, useEffect, Suspense } from 'react'
import { sRGBEncoding } from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stats, useDetectGPU } from '@react-three/drei'
import dynamic from 'next/dynamic'

import Rhino from '@/components/rhino'
import Lights from '@/components/light'
import Effects from '@/components/effects'

const OrbitalControl = dynamic(() => import('@/components/controls'), {
  ssr: false,
})

const Page = ({ title }) => {
  const [windowSize, setWindowSize] = useState({
    width: 100,
    height: 100,
  })


  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const GPUTier = useDetectGPU()
  console.table(GPUTier)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Canvas
      style={{
        width: windowSize.width,
        height: windowSize.height,
      }}
      camera={null}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000);
        gl.outputEncoding = sRGBEncoding;

        // gl.physicallyCorrectLights = true;
      }}
      

      concurrent
    >

      <OrbitalControl />

      <Effects />

      <PerspectiveCamera
        makeDefault
        fov={50}
        near={1}
        far={5000}
        position={[50, 45, 170]}
      />

      <Lights />

      <axesHelper scale={500} />

      <Suspense fallback={null}>
        <Rhino />
      </Suspense>

      <Stats showPanel={0} className="stats" />
    </Canvas>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
