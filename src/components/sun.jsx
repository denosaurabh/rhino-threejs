import React, { forwardRef } from 'react'
import { MeshBasicMaterial, CircleBufferGeometry } from 'three'

const Sun = forwardRef(function Sun(_, forwardRef) {
    let blob = new CircleBufferGeometry(30, 32);

    return (
        <mesh
            ref={forwardRef}
            position={[0, 0, -100]}
            geometry={blob}
            material={new MeshBasicMaterial({ color: 0xF0F0F0 })}
        />
    );
});

export default Sun;