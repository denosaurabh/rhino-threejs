import Head from 'next/head'
import { useState, useEffect, Suspense } from 'react'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Canvas } from '@react-three/fiber'
import { Stats, useDetectGPU, Sky, OrbitControls } from '@react-three/drei'
import { useSpring, animated, config } from "react-spring";
import { useControls } from "leva"

import Rhino from '@/components/rhino'
import Lights from '@/components/light'
import Effects from '@/components/effects'
import Description from '@/components/description'
import Loading from '@/components/modelLoading'
import PointLocations from '@/helpers/pointsData'
import Navigation from '@/components/navigation';
import Point from '@/components/point';
import RhinoTypes from '@/components/types';
import { LinearToneMapping } from 'three'

let selectedItemIndex;
const initialCameraPos = [-10, 10, 150];
const initialControlsTarget = [0, 0, 0];

const Page = () => {
  const { axisHelper: showAxisHelper, showStats } = useControls({ axisHelper: false, showStats: false })

  const [allPoints] = useState(PointLocations)

  const [windowSize, setWindowSize] = useState({
    width: 100,
    height: 100,
  })

  const [isAnimating, setIsAnimating] = useState(false);
  const [description, setDescription] = useState({
    type: 'default',
    pos: { top: '5%', left: '5%' }, 
    size: { width: '300px', height: '90%' }, 
    flexDirection: 'column',
  });

  const AnimatedNavigation = animated(Navigation);
  const AnimatedOrbitControls = animated(OrbitControls);

  const [cameraValues, setCameraValues] = useState({
    cachedPos: initialCameraPos,
    cachedTarget: initialControlsTarget,
    pos: initialCameraPos,
    target: initialControlsTarget,
    autoRotate: true
  });

  const onNavigationItemClicked = (id) => {
    if (selectedItemIndex !== id && !isAnimating) {
      selectedItemIndex = id;

      setDescription({
        type: allPoints[selectedItemIndex].type,
        pos: allPoints[selectedItemIndex].descriptionPos, 
        size: allPoints[selectedItemIndex].descriptionSize, 
        flexDirection: allPoints[selectedItemIndex].flexDirection 
      })
      setIsAnimating(true);
      setCameraValues({
        cachedPos: cameraValues.pos,
        cachedTarget: cameraValues.cachedTarget,
        pos: allPoints[selectedItemIndex].cameraPos,
        target: allPoints[selectedItemIndex].position,
        autoRotate: id === 0
      });
    }
  }

  const spring = useSpring({
    pos: cameraValues.pos,
    target: cameraValues.target,
    from: {
      pos: cameraValues.cachedPos,
      target: cameraValues.cachedTarget
    },
    config: config.molasses,
    onRest: () => setIsAnimating(false)
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const GPUTier = useDetectGPU()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png"  />
      </Head>

      <Description {...description} />
      <RhinoTypes setDescription={setDescription} />

      <Canvas
        style={{
          width: windowSize.width,
          height: windowSize.height,
        }}
        camera={null}
        onCreated={({ gl }) => {
          gl.setClearColor(0xf1f1f1);

          gl.gammaFactor = 2.2;
          gl.gammaOutput = true;
          // gl.toneMapping = LinearToneMapping;
          // gl.toneMappingExposure = 2;

          /* 
          0xf1f1f1, 0x2a2f33
          */

          // gl.physicallyCorrectLights = true;
          // gl.outputEncoding = sRGBEncoding;
          gl.pixelRatio = 1;
        }}
        color="#030405"
        concurrent
      >
        <Effects />
        <Lights />
        <AnimatedOrbitControls
          autoRotate={cameraValues.autoRotate}
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI * 0.4}
          maxPolarAngle={Math.PI * 0.6}
          target={spring.target}
          enableKeys={false}
          enablePan={false}
        />

        {showAxisHelper ? <axesHelper scale={500} /> : null}
        <AnimatedNavigation cameraPosition={spring.pos} />
        <Suspense fallback={<Loading />}>
          <Rhino />
          {isAnimating ? null : (
            <group>
              {
                allPoints.map((_, i) => (
                  <Point
                    key={i}
                    position={allPoints[i].position}
                    name={allPoints[i].name}
                    id={i}
                    onMarkerClicked={onNavigationItemClicked}
                  />
                ))
              }
            </group>
          )}
        </Suspense>
        {showStats ? <Stats showPanel={0} className="stats" /> : null}
        {/* <Sky
          distance={10000}
          sunPosition={[0, 30, -1000]}
          turbidity={10}
          rayleigh={3}
          mieCoefficient={0.0005}
          mieDirectionalG={0.7}
          elevation={2}
          azimuth={180}
          exposure={0.5}
        /> */}
      </Canvas >
    </div >
  )
}

export default Page