import { useEffect, useRef } from "react";
import * as THREE from "three";

import useStore from "@/helpers/store";

const Points = () => {
    const addPoint = useStore(state => state.addPoint);
    const changeCurrentPoint = useStore(state => state.changeCurrentPoint)

    const point1 = useRef()
    const point2 = useRef()
    const point3 = useRef()
    const point4 = useRef()

    const point1Vector = new THREE.Vector3(-5, 30, 42) // left
    const point2Vector = new THREE.Vector3(-2, -20, 38) // land
    const point3Vector = new THREE.Vector3(46, 27, 50) // horn
    const point4Vector = new THREE.Vector3(-40, 20, 48) // stomach

    useEffect(() => {
        if (point1.current) {
            console.log('addingpoint')
            addPoint('1', { element: point1, vector: point1Vector, cameraPosition: [-10, 10, 150], cameraRotation: [0, 0, 0] })
        }

        if (point2.current) {
            addPoint('2', { element: point2, vector: point2Vector, cameraPosition: [-10, 10, 150], cameraRotation: [0, 0, 0] })
        }

        if (point3.current) {
            addPoint('3', { element: point3, vector: point3Vector, cameraPosition: [134, 15, -11], cameraRotation: [0, 0.59, 0] })
        }

        if (point4.current) {
            addPoint('4', { element: point4, vector: point4Vector, cameraPosition: [-10, 10, 150], cameraRotation: [0, 0, 0] })
        }
    }, [point1.current, point2, point3, point4])

    const onPointClick = (e) => {
        const { no } = e.target.dataset;
        changeCurrentPoint(no);
    }

    return (
        <>
            <div className="annotation" ref={point1} data-no={'1'} onClick={onPointClick}>+</div>
            <div className="annotation" ref={point2} data-no={'2'} onClick={onPointClick}>+</div>
            <div className="annotation" ref={point3} data-no={'3'} onClick={onPointClick}>+</div>
            <div className="annotation" ref={point4} data-no={'4'} onClick={onPointClick}>+</div>
        </>
    )
}

// const [localPoints, setPoints] = useState([])

export default Points;
