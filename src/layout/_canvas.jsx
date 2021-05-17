import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Preload } from '@react-three/drei'
import { A11yUserPreferences } from '@react-three/a11y'
import useStore from '@/helpers/store'

const OrbitalControl = dynamic(() => import('@/components/controls'), {
  ssr: false,
})

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      {/* <PerspectiveCamera makeDefault position={[0, 0, 4]} /> */}

      <OrbitalControl />

      <A11yUserPreferences>
        <Preload all />
        {children}
      </A11yUserPreferences>
    </Canvas>
  )
}

export default LCanvas
