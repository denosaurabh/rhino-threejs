import { useState, useEffect, Suspense, useRef } from 'react'
import { sRGBEncoding, Vector3 } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Stats, useDetectGPU, OrbitControls } from '@react-three/drei'
import { useControls } from "leva"

import Rhino from '@/components/rhino'
import Lights from '@/components/light'
import Effects from '@/components/effects'
import Points from '@/components/points'
import PointsUpdate from '@/components/update'
import useStore from '@/helpers/store'

// const OrbitalControl = dynamic(() => import('@/components/controls'), {
//   ssr: false,
// })

const Page = ({ title }) => {
  const { axisHelper: showAxisHelper } = useControls({ axisHelper: false })
  const [{ positionX, positionY, positionZ, camRotateX, camRotateY, camRotateZ }, set] = useControls(() => ({
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
    camRotateX: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.001,
    },
    camRotateY: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.001,
    },
    camRotateZ: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.001,
    }
  }))

  const points = useStore(state => state.points);
  const currentPoint = useStore(state => state.currentPoint)

  const [windowSize, setWindowSize] = useState({
    width: 100,
    height: 100,
  })

  const myCamera = useRef()

  useEffect(() => {
    console.log(points[currentPoint])
    // const [pX, pY, pZ] = points[currentPoint].cameraPosition;
    // const [rX, rY, rZ] = points[currentPoint].cameraPosition;

    // set({ positionX: pX, positionY: pY, positionZ: pZ })
    // set({ camRotateX: rX, camRotateY: rY, camRotateZ: rZ })

    console.log(myCamera.current)

    if (!myCamera.current) return;

    // myCamera.current.position.set(new Vector3(134, 15, -11));
    // myCamera.current.rotation.set(points[currentPoint].cameraRotation);
  }, [currentPoint, myCamera.current])

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

      <Canvas
        style={{
          width: windowSize.width,
          height: windowSize.height,
        }}
        camera={null}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000);

          gl.outputEncoding = sRGBEncoding;
          gl.pixelRatio = 1;

          // gl.gammaFactor = 2.2;
          // gl.gammaOutput = true;
        }}
        concurrent
      >

        <Effects />

        <PerspectiveCamera
          makeDefault
          fov={50}
          near={1}
          far={5000}
          position={[positionX, positionY, positionZ]}
          rotation={[Math.PI * camRotateX, Math.PI * camRotateY, Math.PI * camRotateZ]}
          ref={myCamera}
        />

        {/* <OrbitControls
          camera={myCamera.current}
        /> */}

        <Lights />

        {showAxisHelper ? <axesHelper scale={500} /> : null}

        <PointsUpdate />

        <Suspense fallback={null}>
          <Rhino />
        </Suspense>

        <Stats showPanel={0} className="stats" />
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