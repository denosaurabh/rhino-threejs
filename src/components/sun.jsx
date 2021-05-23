import React, { forwardRef } from 'react'
import { MeshBasicMaterial, CircleBufferGeometry, AmbientLight } from 'three'
// import { extend } from '@react-three/fiber'
// import dynamic from 'next/dynamic'

// const BufferGeometryUtils = dynamic(() => import('three/examples/jsm/utils/BufferGeometryUtils'), {
//     ssr: false,
// })

// import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";

// extend({ BufferGeometryUtils })


const Sun = forwardRef(function Sun(props, forwardRef) {
    // useFrame(() => {
    //   forwardRef.current.rotation.z -= 0.01;
    // });

    let blob = new CircleBufferGeometry(30, 32);

    return (
        <mesh
            ref={forwardRef}
            position={[0, 0, -40]}
            geometry={blob}
            material={new MeshBasicMaterial({ color: 0xF0F0F0 })}
        />
    );
});

export default Sun;