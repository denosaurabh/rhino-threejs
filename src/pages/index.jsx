import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
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
      style={{ width: windowSize.width, height: windowSize.height }}
      concurrent
    >
      <OrbitalControl />

      <spotLight color='#999999' />

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
