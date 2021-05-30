import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import useStore from '@/helpers/store'
import { Vector3 } from 'three'

const PointsUpdate = () => {
    const points = useStore(state => state.points);
    const currentPoint = useStore(state => state.currentPoint)
    const rhinoRef = useStore(state => state.rhino);

    const sprite = useRef()

    const pointsArr = Object.values(points)
    if (!pointsArr || pointsArr.length === 0 || !pointsArr[1]?.element?.current) return <></>;

    const annotationTex = points[1].element.current;

    const numberTexture = new THREE.CanvasTexture(
        annotationTex
    );

    function updateScreenPosition(renderer, annotation, vectorObj, camera) {
        const vector = new THREE.Vector3(vectorObj.x, vectorObj.y, vectorObj.z);

        const canvas = renderer.domElement;

        vector.project(camera);

        vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
        vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

        annotation.style.transform = `translate3d(${vector.x}px, ${vector.y}px, 0)`;
    }

    useFrame((state) => {
        const { camera, gl: renderer } = state;

        // console.log(camera.position, camera.rotation)


        // function updateAnnotationOpacity() {
        //     if (!rhinoRef) return;

        //     const meshDistance = camera.position.distanceTo(rhinoRef.position);
        //     const spriteDistance = camera.position.distanceTo(sprite.position);
        //     spriteBehindObject = spriteDistance > meshDistance;
        //     sprite.material.opacity = spriteBehindObject ? 0.25 : 1;

        //     // Do you want a number that changes size according to its position?
        //     // Comment out the following line and the `::before` pseudo-element.
        //     sprite.material.opacity = 0;
        // }

        // updateAnnotationOpacity()

        updateScreenPosition(renderer, points[1].element.current, points[1].vector, camera)
        updateScreenPosition(renderer, points[2].element.current, points[2].vector, camera)
        updateScreenPosition(renderer, points[3].element.current, points[3].vector, camera)
        updateScreenPosition(renderer, points[4].element.current, points[4].vector, camera)
    });

    return (
        <>
            <sprite position={[250, 250, 250]} scale={[60, 60, 1]} ref={sprite}>
                <spriteMaterial map={numberTexture} alphaTest={0.5} depthTest={false} depthWrite={false} transparent={true} />
            </sprite>
        </>
    )
}

export default PointsUpdate;