import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import dynamic from 'next/dynamic'
import Rhino from '@/components/rhino'

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
        backgroundColor: '#0f0f0f',
      }}
      camera={null}
      concurrent
    >
      <EffectComposer>
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={1000} /> */}
      </EffectComposer>

      <OrbitalControl />

      <PerspectiveCamera
        makeDefault
        fov={50}
        near={1}
        far={5000}
        position={[0, 0, 170]}
      />

      <hemisphereLight
        color={0xffeeb1}
        groundColor='#000000'
        intensity={4}
        position={[100, 150, 0]}
      />

      <spotLight color={0xffa95c} intensity={4} castShadow={true} />

      <axesHelper scale={500} />

      <Suspense fallback={null}>
        <Rhino />
      </Suspense>
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
