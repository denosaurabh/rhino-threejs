import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useSpring } from "react-spring";

import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'

const Camera = () => {
    const prespectiveCamera = useRef()
    const orbitControl = useRef()

    const { gl, camera } = useThree();

    const points = useStore(state => state.points);
    const currentPoint = useStore(state => state.currentPoint)

    // useEffect(() => {
    //     const localCamera = prespectiveCamera.current;

    //     console.log(points[currentPoint], 'updating position')
    //     const [pX, pY, pZ] = points[currentPoint].cameraPosition;
    //     const [rX, rY, rZ] = points[currentPoint].cameraRotation;

    //     // set({ positionX: pX, positionY: pY, positionZ: pZ })
    //     // set({ camRotateX: rX, camRotateY: rY, camRotateZ: rZ })

    //     console.log(pX, pY, pZ, rX, rY, rZ)

    //     console.log(orbitControl.current)

    //     if (!orbitControl.current && !localCamera) return;

    //     const vectorPos = new THREE.Vector3(134, 15, -11)

    //     localCamera.position.x = pX;
    //     localCamera.position.y = pY;
    //     localCamera.position.z = pZ;

    //     localCamera.rotation.x = rX;
    //     localCamera.rotation.y = rY;
    //     localCamera.rotation.z = rZ;

    //     orbitControl.current.update();

    //     // myCamera.current.rotation.set(points[currentPoint].cameraRotation);
    // }, [currentPoint, orbitControl.current, prespectiveCamera.current])

    // useFrame(() => {
    //     if (!orbitControl.current) return;

    //     console.log(orbitControl.current)
    //     // console.log(prespectiveCamera.current.position, prespectiveCamera.current.rotation)
    // })

    // useFrame((state) => {
    //     const myCamera = state.camera;

    //     const [pX, pY, pZ] = points[currentPoint].cameraPosition;
    //     const [rX, rY, rZ] = points[currentPoint].cameraRotation;

    //     console.log(rX, rY, rZ)

    //     // if (points[0] === points[currentPoint]) return;

    //     const posVector = new THREE.Vector3(pX, pY, pZ)
    //     const rotationVector = new THREE.Vector3(rX, rY, rZ)

    //     // myCamera.position.lerp(posVector, 0.1);

    //     // myCamera.position.x = pY;
    //     // myCamera.position.y = pZ;
    //     // myCamera.position.z = pZ;

    //     myCamera.rotation.x = rX;
    //     myCamera.rotation.y = rY;
    //     myCamera.rotation.z = rZ;


    //     myCamera.updateProjectionMatrix();


    //     // console.log(camera.position, camera.rotation)
    // })

    // const [pX, pY, pZ] = points[currentPoint].cameraPosition;
    const [rX, rY, rZ] = points[currentPoint].cameraRotation;

    // const { x, y, z } = useSpring({
    //     from: { x: 0, y: 0, z: 0 },
    //     x: pX,
    //     y: pY,
    //     z: pZ,
    //     config: {
    //         duration: 500,
    //         mass: 9,
    //         tension: 250,
    //         friction: 60
    //     }
    // });

    // useFrame(() => {
    //     camera.position.x = pX;
    //     camera.position.x = pY;
    //     camera.position.x = pZ;

    //     camera.rotation.x = rX;
    //     camera.rotation.x = rY;
    //     camera.rotation.x = rZ;

    //     orbitControl.current.update();
    // });

    useEffect(() => {
        if (!prespectiveCamera.current && !orbitControl.current) return;

        prespectiveCamera.current.position.y = rY;

        orbitControl.current.update();

    }, [points, prespectiveCamera.current, orbitControl.current])

    return (
        <>
            <PerspectiveCamera
                ref={prespectiveCamera}
                makeDefault
                fov={50}
                near={1}
                far={5000}
                position={[-10, 10, 200]}
                rotation={[0, 0, 0]}
                zoom={0.6}
            />

            <OrbitControls
                ref={orbitControl}
                camera={prespectiveCamera.current}
                zoomSpeed={0.4}
                // autoRotate={true}
                autoRotateSpeed={0.7}
                minPolarAngle={Math.PI * 0.4}
                maxPolarAngle={Math.PI * 0.6}
                enablePan={false}
            />
        </>
    )
}

export default Camera;