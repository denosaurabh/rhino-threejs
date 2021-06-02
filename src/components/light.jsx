import { useRef } from 'react'
import { PointLightHelper, SpotLightHelper, Vector3 } from 'three'
import { useHelper } from '@react-three/drei'   

const Light = () => {
    const spotLightRef = useRef()
    // useHelper(spotLightRef, SpotLightHelper, 'cyan')

    const pointLightRef = useRef()
    // useHelper(pointLightRef, SpotLightHelper, 'cyan')


    return (
        <>
            <spotLight ref={spotLightRef} color={0xFFFFFF} intensity={1} position={[-400, 140, 0]} distance={700}
                angle={Math.PI / 10} penumbra={1} decay={1} />

            <spotLight ref={pointLightRef} color={0xFFFFFF} intensity={1} position={[200, 200, 1000]} distance={2000}
                angle={Math.PI / 13} penumbra={1} decay={1} />
        </>
    )
}

export default Light;