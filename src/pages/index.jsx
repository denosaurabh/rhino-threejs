import { useState, useEffect, Suspense } from 'react'
import { sRGBEncoding, ACESFilmicToneMapping, ToneMapping } from 'three'
import { Canvas } from '@react-three/fiber'
import { Stats, useDetectGPU, Sky } from '@react-three/drei'
import { useControls } from "leva"

import Rhino from '@/components/rhino'
import Lights from '@/components/light'
import Effects from '@/components/effects'
import Points from '@/components/points'
import PointsUpdate from '@/components/update'
import Camera from '@/components/camera'
import Description from '@/components/description'
import Loading from '@/components/modelLoading'

// const OrbitalControl = dynamic(() => import('@/components/controls'), {
//   ssr: false,
// })

const Page = ({ title }) => {
  const { axisHelper: showAxisHelper, showStats } = useControls({ axisHelper: false, showStats: false })

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
    <div>
      <Points />
      <Description />

      <Canvas
        style={{
          width: windowSize.width,
          height: windowSize.height,
        }}
        camera={null}
        onCreated={({ gl }) => {
          gl.setClearColor(0xf1f1f1);

          gl.outputEncoding = sRGBEncoding;
          gl.pixelRatio = 1;
        }}
        concurrent
      >

        <Effects />

        <Lights />
        <Camera />



        {showAxisHelper ? <axesHelper scale={500} /> : null}

        <PointsUpdate />

        <Suspense fallback={<Loading />}>
          <Rhino />
        </Suspense>

        {showStats ? <Stats showPanel={0} className="stats" /> : null}


        <Sky
          distance={10000}
          sunPosition={[0, 30, -1000]}
          turbidity={10}
          rayleigh={3}
          mieCoefficient={0.0005}
          mieDirectionalG={0.7}
          elevation={2}
          azimuth={180}
          exposure={0.5}
        />
      </Canvas >
    </div >
  )
}

export default Page

/*

----------------------------   Center View

 positionX: {
      value: -10,
      min: -200,
      max: 300,
      step: 0.1,
    },
    positionY: {
      value: 10,
      min: -200,
      max: 300,
      step: 0.1,
    },
    positionZ: {
      value: 150,
      min: -200,
      max: 300,
      step: 0.1,
    },



---------------------------------  Horn View

{"camRotateY":0.598}
{"camRotateY":0.598}

{"positionX":134.1}
{"positionY":15.4}
{"positionZ":-11}








*/