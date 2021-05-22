import React, { forwardRef } from 'react'
import { SphereBufferGeometry, Matrix4, MeshBasicMaterial } from 'three'
import { extend } from '@react-three/fiber'
// import dynamic from 'next/dynamic'

// const BufferGeometryUtils = dynamic(() => import('three/examples/jsm/utils/BufferGeometryUtils'), {
//     ssr: false,
// })

import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";

extend({ BufferGeometryUtils })


const Sun = forwardRef(function Sun(props, forwardRef) {
    // useFrame(() => {
    //   forwardRef.current.rotation.z -= 0.01;
    // });

    let blob = new SphereBufferGeometry(1, 4, 4);

    for (let x = 0; x < 20; x++) {
        const sphereGeometry = new SphereBufferGeometry(1, 4, 4);

        sphereGeometry.applyMatrix4(
            new Matrix4().makeTranslation(
                Math.sin(((Math.PI * 2) / 20) * x) * 10,
                Math.cos(((Math.PI * 2) / 20) * x) * 10,
                0
            )
        );

        blob = BufferGeometryUtils.mergeBufferGeometries([blob, sphereGeometry]);
    }

    return (
        <mesh
            ref={forwardRef}
            position={[0, 0, -15]}
            geometry={blob}
            material={new MeshBasicMaterial({ color: 0x00ffff })}
        />
    );
});

export default Sun;